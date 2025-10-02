import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
// import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react';
export const AddMov = () => {

    const registrarMov = async () => {

        //Valida Data
        console.log('Desde Registrar');
        
        console.log(form);
        // const validaCategoria = () => {
        //     return
        // }
        var datosValidos = 'S'
        if (form.categoria == '') {
            console.log('No se cargo categoria');
            datosValidos = 'N'
        }

        if (datosValidos == 'S'){
            try {
                await addDoc(collection(db, "movimientos"), {
                    ...form, //Copia todo JSON y (agrega o actualiza)
                    fecha: new Date(),
                });
                console.log("Movimiento registrado");
                
            } catch (error) {
                console.log(error);
            }
        }
    }

    const [form, setForm] = useState({
        desc : '',
        tipo : '',
        monto : '',
        moneda : '',
        categoria: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form, //Copia todo JSON y (agrega o actualiza)
            [name] : value
        })
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
                                        <select className="form-select" aria-label="categoria"
                                        name='categoria'
                                        value={form.categoria}
                                        onChange={ handleChange }>
                                            <option value="">Categoría</option>
                                            <option value="Comida">Comida</option>
                                            <option value="Transporte">Transporte</option>
                                            <option value="General">General</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input type="text" name="desc" id="" placeholder="Descripción" className='form-control' value={form.desc} onChange={ handleChange } />
                                    </div>
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-control">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="tipo" id="tipo1" value="ingreso" onChange={ handleChange }/>
                                                        <label className="form-check-label" htmlFor="tipo1">
                                                            ingreso
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="tipo" id="tipo2" value="egreso" onChange={ handleChange }/>
                                                        <label className="form-check-label" htmlFor="tipo2">
                                                            egreso
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-control">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="moneda" id="moneda1" value="soles" onChange={ handleChange }/>
                                                        <label className="form-check-label" htmlFor="tipo1">
                                                            S/
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="moneda" id="moneda2" value="dolares" onChange={ handleChange }/>
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
                                        <input type="number" name="monto" id="" placeholder="Monto" className='form-control' value={form.monto} onChange={ handleChange } />
                                    </div>
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