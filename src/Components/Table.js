import styles from './Table.module.css';


function EmployeesTable() {
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
                <tbody>
                    <tr className={styles.activeRow}>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                        <td>example</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EmployeesTable;