import { useState } from 'react'
// import './App.css'
import TestFirestore from './testFirestore.jsx'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { MovList, AddMov } from './movimientos/components'
function App() {
    const [count, setCount] = useState(0)
    // const auth = getAuth();

    // signInWithEmailAndPassword(auth, "test@test.com", "test@test.com").then((userCredential) => {
    //     console.log("Usuario logeado", userCredential.user);
    // })
    // .catch((error) =>{
    //     console.log("Error en login", error.message); 
    // });


    return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Finance-app</h1>
                    <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <MovList></MovList>
            </div>
            <div className="row">
                <AddMov></AddMov>
            </div>
        </div>
    </>
  )
}

export default App
