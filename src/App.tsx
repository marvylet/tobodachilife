import './App.css'
import Pet from './Pet.tsx'
import {useEffect, useState} from "react";
import Layout from "./Layout.tsx";

function App() {
  const maxHlad = 50;
  const [hlad, setHlad] = useState(maxHlad);

  const maxEnergie = 50;
  const [energie, setEnergie] = useState(maxEnergie);

  const maxStesti = 50;
  const [stesti, setStesti] = useState(maxStesti);

  //let ending = false;

  function UpdateHlad(){
    if(hlad > maxHlad){
      setHlad(maxHlad);
    }
      if ((hlad - 2) <= 0) {
        setHlad(0);
        //ending = true;
      } else {
        setHlad(hlad - 2);
      }
  }
  useEffect(() => {
    const tick = setTimeout(() => {
      UpdateHlad();
    }, 5000);
    return () => clearTimeout(tick);

  }, [hlad]);

  function UpdateEnergie(){
    if(energie > maxEnergie){
      setEnergie(maxEnergie);
    }
      if ((energie - 2) <= 0) {
        setEnergie(0);
      } else {
        setEnergie(energie - 2);
    }
  }
  useEffect(() => {
    const tick = setTimeout(() => {
      UpdateEnergie();
    }, 2500);
    return () => clearTimeout(tick);

  }, [energie]);

  function UpdateStesti(){
    if(stesti > maxStesti){
      setStesti(maxStesti);
    }
      if ((stesti - 2) <= 0) {
        setStesti(0);
      } else {
        setStesti(stesti - 2);
      }
  }
  useEffect(() => {
    const tick = setTimeout(() => {
      UpdateStesti();
    }, 3000);
    return () => clearTimeout(tick);

  }, [stesti]);

  return (
    <>
      <Pet
          maxHlad={maxHlad} setHlad={setHlad} hlad={hlad}
          maxEnergie={maxEnergie} setEnergie={setEnergie} energie={energie}
          maxStesti={maxStesti} setStesti={setStesti} stesti={stesti} />
        <Layout/>
    </>
  )
}

export default App
