import styles from './Table.module.css';


function EmployeesTable({ employees, file }) {
    const renderEmployes = (file) => {
        return (
            <tr key={file.EmpID} className={styles.activeRow}>
                <td>{file.EmpID}</td>
                <td>{file.ProjectID}</td>
                <td>{file.DateFrom}</td>
                <td>{file.DateTo}</td>
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
                        <tr className={styles.activeRow}>
                            <td>Example1</td>
                            <td>Example2</td>
                            <td>Example3</td>
                            <td>Example4</td>
                        </tr>
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