import styles from './Table.module.css';


function EmployeesTable({ employees, file }) {
    const renderEmployes = (file) => {
        return (
            <tr key={file.DaysWork} className={styles.activeRow}>
                <td>{file.EmpID1}</td>
                <td>{file.EmpID2}</td>
                <td>{file.ProjectID}</td>
                <td>{file.DaysWork}</td>
            </tr>
        )
    }
    return (
        <div className={styles.tableContainer}>
            <table className={styles.contentTable}>
                <thead>
                    <tr>
                        <th>Employee ID #1</th>
                        <th>Employee ID #2</th>
                        <th>Project ID</th>
                        <th>Days worked</th>
                    </tr>
                </thead>
                {file ?
                    <tbody> 
                        {employees.map(renderEmployes)}
                    </tbody>
                    :
                    null
                }

            </table>
        </div>
    )
}

export default EmployeesTable;