import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import React, { useEffect, useState } from 'react';

const TestFirestore = () => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const testConnection = async () => {
            try{
                await addDoc(collection(db, "test"), {
                    message: "Probando conexión",
                    timestamp: new Date(),
                });

                console.log("Documento agregado con exito")

                const querySnapshot = await getDocs(collection(db, "test"));
                const items = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                
                // console.log(items);
                
                setDocs(items);
            } catch(error){
                console.error("Error FireStore", error);
            };
        }

        testConnection();
    }, []);

    return (
        <>
            <h3 className="">Prueba de conexión con fireStore</h3> 
            <ul>
                {
                    docs.map((item) => (
                        <li key={item.id}>
                            {item.message} - {item.timestamp?.toDate?.().toString?.() || ""}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default TestFirestore;