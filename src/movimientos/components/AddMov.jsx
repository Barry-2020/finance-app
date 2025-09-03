import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
// import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react';
export const AddMov = () => {

    const registrarMov = async () => {
        try {
            await addDoc(collection(db, "movimientos"), {
                monto: montoMov,
                tipo: tipoMov, //"egreso" "ingreso"
                moneda: moneMov,
                categoria: "comida",
                descripcion: descMov,
                fecha: new Date(),
            });

            console.log("Movimiento registrado");
            
        } catch (error) {
            console.log(error);
        }
    }

    const [descMov, setDescMov] = useState('')
    const [tipoMov, setTipoMov] = useState('')
    const [montoMov, setMontoMov] = useState('')
    const [moneMov, setMoneMov] = useState('')

    const handleDesc = (e) => {
        // setDescMov((descMov) => 
        //     descMov + obj.nativeEvent.data
        //  );
        // console.log(descMov);
        setDescMov(e.target.value)
        console.log(descMov);
    }

    const handleTipo = e => {
        setTipoMov(e.target.value);
        console.log(tipoMov);
    }

    const handleMonto = e => {
        setMontoMov(e.target.value);
        console.log(montoMov);
    }
    const handleMone = e => {
        setMoneMov(e.target.value);
        console.log(moneMov);
    }
    const onSearchSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="col">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Agregar Movimiento</h5>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={onSearchSubmit}>
                                    {
                                        //AGREGAR CATEGORIA SELECT
                                    /* <div className="mb-3">
                                        <input type="radio" name="" id="" placeholder="radio2" className='form-control' />
                                    </div> */}
                                    <div className="mb-3">
                                        <input type="text" name="" id="" placeholder="Descripción" className='form-control' value={descMov} onChange={ handleDesc } />
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-control">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="tipo" id="tipo1" value="ingreso" onChange={ handleTipo }/>
                                                        <label className="form-check-label" htmlFor="tipo1">
                                                            ingreso
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="tipo" id="tipo2" value="egreso" onChange={ handleTipo }/>
                                                        <label className="form-check-label" htmlFor="tipo2">
                                                            egreso
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-control">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="moneda" id="moneda1" value="soles" onChange={ handleMone }/>
                                                        <label className="form-check-label" htmlFor="tipo1">
                                                            S/
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="moneda" id="moneda2" value="dolares" onChange={ handleMone }/>
                                                        <label className="form-check-label" htmlFor="tipo2">
                                                            $
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>  
                                        </div>
                                        
                                        {/* <input type="text" name="" id="" placeholder="Tipo" className='form-control' value={tipoMov} onChange={ handleTipo } /> */}
                                            
                                    </div>
                                    <div className="mb-3">
                                        <input type="number" name="" id="" placeholder="Monto" className='form-control' value={montoMov} onChange={ handleMonto } />
                                    </div>
                                    {/* <div className="mb-3">
                                        <input type="radio" name="" id="" placeholder="radio2" className='form-control' />
                                    </div> */}
                                </form>
                                <button className="btn btn-primary" onClick={registrarMov}>Grabar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}