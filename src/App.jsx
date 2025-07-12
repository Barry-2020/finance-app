import { useState } from 'react'
import './App.css'
import TestFirestore from './testFirestore.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Finance-app</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Pruebita con fe
      </p>
        <div>
            <TestFirestore />
        </div>
    </>
  )
}

export default App
