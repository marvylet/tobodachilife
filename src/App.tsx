import './App.css'
import Pet from './Pet.tsx'
import {useState} from "react";

function App() {
  const maxHlad = 50;
  const [hlad, setHlad] = useState(maxHlad);

  const maxEnergie = 50;
  const [energie, setEnergie] = useState(maxEnergie);

  const maxStesti = 50;
  const [stesti, setStesti] = useState(maxStesti);

  return (
    <>
      <Pet
          maxHlad={maxHlad} setHlad={setHlad} hlad={hlad}
          maxEnergie={maxEnergie} setEnergie={setEnergie} energie={energie}
          maxStesti={maxStesti} setStesti={setStesti} stesti={stesti} />
    </>
  )
}

export default App
