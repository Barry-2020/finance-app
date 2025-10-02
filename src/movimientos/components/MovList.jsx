import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebaseConfig"


//Con el export y el index queda exportado
export const MovList = () => {
    const [movimientos, setMovimientos] = useState([])

    useEffect(() => {
        const fetchMovimientos = async () => {
            try{
                const querySnapshot = await getDocs(collection(db, "movimientos"));
                const data = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setMovimientos(data);
            } catch(error) {
                console.log("Error obtenido movimientos: ", error);
            }
        };
        fetchMovimientos();
    }, [])
    
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
                        {
                            movimientos.map(mov => (
                                <tr>
                                    <th scope="row" key={mov.id}>{mov.id}</th>
                                    <td>{mov.desc}</td>
                                    <td>{mov.tipo}</td>
                                    <td>{mov.modeda}</td>
                                    <td>{mov.monto}</td>
                                    <td>
                                        <button className="btn btn-warning">Editar</button>
                                        <button className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>
        </>
    )
}
