import {useState} from "react";

interface PetProps {
    maxHlad: number;
    hlad: number;
    setHlad: (hlad: number) => void;

    maxEnergie: number;
    energie: number;
    setEnergie: (energie: number) => void;

    maxStesti: number;
    stesti: number;
    setStesti: (stesti: number) => void;
}

function Pet (props: PetProps) {
    let ending = false;
    const [endText, setEndText] = useState("Playing...");

    function UpdateHlad(){
        if(props.hlad > props.maxHlad){
            props.setHlad(props.maxHlad);
        }

        if(ending) {
            props.setHlad(0);
        }else {
            if ((props.hlad - 2) <= 0) {
                props.setHlad(0);
                ending = true;
            } else {
                props.setHlad(props.hlad - 2);
            }
        }
    }
    setInterval(UpdateHlad, 15000);

    function UpdateEnergie(){
        if(props.energie > props.maxEnergie){
            props.setEnergie(props.maxEnergie);
        }

        if(ending) {
            props.setEnergie(0);
        }else {
            if ((props.energie - 2) <= 0) {
                props.setEnergie(0);
                ending = true;
            } else {
                props.setEnergie(props.energie - 2);
            }
        }
    }
    setInterval(UpdateEnergie, 15000);

    function UpdateStesti(){
        if(props.stesti > props.maxStesti){
            props.setStesti(props.maxStesti);
        }

        if(ending) {
            props.setStesti(0);
        }else {
            if ((props.stesti - 2) <= 0) {
                props.setStesti(0);
                ending = true;
            } else {
                props.setStesti(props.stesti - 2);
            }
        }
    }
    setInterval(UpdateStesti, 15000);

    if(ending){
        setEndText("Game Over!");
    }

    return (
        <>
            <p>{endText}</p>
            <p>Hlad: {props.maxHlad}/{props.hlad}</p>
            <p>Energie: {props.maxEnergie}/{props.energie}</p>
            <p>Stesti: {props.maxStesti}/{props.stesti}</p>
        </>
    )
}

export default Pet