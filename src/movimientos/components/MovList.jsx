
//Con el export y el index queda exportado
export const MovList = () => {
    return (
        <>
            <div className="col">

                <h1>Lista de Movimientos</h1>
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Moneda</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">45423</th>
                            <td>Comida</td>
                            <td>Egreso</td>
                            <td>Soles</td>
                            <td>29.90</td>
                            <td>
                                <button className="btn btn-warning">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">45424</th>
                            <td>Transporte</td>
                            <td>Egreso</td>
                            <td>Soles</td>
                            <td>2.90</td>
                            <td>
                                <button className="btn btn-warning">Editar</button>
                                <button className="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </>
    )
}
