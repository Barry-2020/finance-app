import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
// import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from 'react';
export const AddMov = ({ onAddMov }) => {

    const [form, setForm] = useState({
        desc : '',
        tipo : '',
        monto : '',
        moneda : '',
        categoria: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form, //Copia todo JSON y (agrega o actualiza)
            [name] : value
        })
    };

    const [isSaving, setIsSaving] = useState(false);

    const registrarMov = async () => {
        setIsSaving(true);
        //Valida Data
        console.log('Desde Registrar');
        console.log(form);
        // const validaCategoria = () => {
        //     return
        // }
        let datosValidos = 'S'
        if (form.categoria === '') {
            console.log('No se cargo categoria');
            datosValidos = 'N'
        }

        if (datosValidos === 'S'){
            try {
                const docRef = await addDoc(collection(db, "movimientos"), {
                    ...form, //Copia todo JSON y (agrega o actualiza)
                    fecha: new Date(),
                });
                
                console.log("Movimiento registrado: ", docRef.id);
                
                //Crear objeto completo para actualizar la lista
                const nuevoMovimiento = {
                    id: docRef.id,
                    fecha: new Date(),
                    ...form, 
                };
                //Notificar al padre
                if (onAddMov) { //Verifica que existe la funcion
                    onAddMov(nuevoMovimiento);
                }

                // Cerrar modal después del registro exitoso
                const modalEl = document.getElementById("exampleModal");
                const modalInstance = window.bootstrap.Modal.getInstance(modalEl);
                if (modalInstance) {
                    modalInstance.hide();
                }

                // 🔹 Limpia el formulario
                setForm({
                    desc: '',
                    tipo: '',
                    monto: '',
                    moneda: '',
                    categoria: '',
                });

            }
            catch (error) {
                console.log(error);
            }
            finally {
                setIsSaving(false);
            }
        }
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="d-grid gap-2">
                {/* <button className="btn btn-info">Agregar</button> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar
                </button>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Movimiento</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" onSubmit={onSearchSubmit}>
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
                                </div>
                                <div className="mb-3">
                                    <input type="number" name="monto" id="" placeholder="Monto" className='form-control' value={form.monto} onChange={ handleChange } />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                            <button className="btn btn-primary" onClick={registrarMov} disabled={isSaving}>
                            { isSaving ? 'Grabando...' : 'Grabar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}