import "../styles/table.css";

function DataTable({ columns, data, renderActions }) {

    return (

        <table className="custom-table">

            <thead>

                <tr>

                    {columns.map((column, index) => (
                        <th key={index}>{column.header}</th>
                    ))}

                    {renderActions && <th>Actions</th>}

                </tr>

            </thead>

            <tbody>

                {data.length > 0 ? (

                    data.map((row) => (

                        <tr key={row.id}>

                            {columns.map((column, index) => (

                                <td key={index}>

                                    {column.render
                                        ? column.render(row)
                                        : row[column.accessor]}

                                </td>

                            ))}

                            {renderActions && (

                                <td>

                                    {renderActions(row)}

                                </td>

                            )}

                        </tr>

                    ))

                ) : (

                    <tr>

                        <td
                            colSpan={columns.length + (renderActions ? 1 : 0)}
                            style={{ textAlign: "center" }}
                        >
                            No Data Available
                        </td>

                    </tr>

                )}

            </tbody>

        </table>

    );

}

export default DataTable;