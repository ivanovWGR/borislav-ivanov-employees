import React, { useState, useCallback, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import styles from './Upload.module.css';



function DropZone() {
    const [file, setFile] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles[0])
        setFile(acceptedFiles[0]);
    }, [])

    return (

        <div className={styles.dragContainer}>
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
                                Select file to upload
                            </div>
                        </div>}
                        {isDragReject && "File type not accepted"}
                    </div>
                )}
            </Dropzone>
            {file ?
                <ul className={styles.fileInformation}>
                    <li>File: {file.name}</li>
                    <li>Size: {(+file.size / 1000000).toFixed(2)} MB</li>
                </ul>
                : null
            }
        </div>
    )
}

export default DropZone;