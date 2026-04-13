import './App.css'
import Pet from './Pet.tsx'
import {useState} from "react";

function App() {
  const maxHlad = 50;
  const [hlad, setHlad] = useState(maxHlad);

  return (
    <>
      <Pet maxHlad={maxHlad} setHlad={setHlad} hlad={hlad} />
    </>
  )
}

export default App
