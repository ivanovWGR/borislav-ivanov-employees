import React, { useState, useCallback } from 'react';
import Dropzone from 'react-dropzone';
import { notification, Button } from 'antd';
import 'antd/dist/antd.css';
import styles from './Upload.module.css';
import EmployeesTable from './Table';


function DropZone() {
    const [file, setFile] = useState(null);
    const [employees, setEmployees] = useState([]);

    const openNotification = (message) => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>
                Confirm
            </Button>
        );
        notification.open({
            message: 'Notification Upload',
            description: message,
            btn,
            key,
        });
    };

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0]);

    }, [])

    const clearFile = () => {
        setFile(null);
        const message = 'File removed...upload another file'
        openNotification(message)
    }

    return (
        <>
            <div className={file ? styles.dragActive : styles.dragContainer}>
                <Dropzone
                    onDrop={onDrop}
                    accept=".csv,text/csv*"
                    multiple={false}
                    maxFiles={1}
                >
                    {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                        <div {...getRootProps()} className={styles.uploadContainer}>
                            <input {...getInputProps()} />
                            {!isDragActive && <div className={styles.descriptDrag}>
                                <div className={styles.headerDrag}>
                                    {file ? <>List of employees</> : <> Select file to upload</>}
                                </div>
                            </div>}
                            {isDragReject && "File type not accepted"}
                        </div>
                    )}
                </Dropzone>
                {file ?
                    <ul className={styles.fileInformation}>
                        <li>File: {file.name}</li>
                        <li>Size: {(+file.size).toFixed(2)} bytes</li>
                    </ul>
                    : null
                }
            </div>
            <button className={file ? styles.discardButtonActive : styles.discardButton} disabled={!file ? true : false} onClick={clearFile}>Upload new file</button>
            <EmployeesTable />
        </>
    )
}

export default DropZone;