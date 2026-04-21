import type {ShowMenu} from "./types.ts";
import {useState} from "react";
import MainScreen from "./MainScreen.tsx";

const InfoScreen: React.FC<ShowMenu> = ({isDrawn, setVisibility}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [petNum, setPet] = useState(0);


    function VyberMazlicka(pett: number){
        setIsVisible(true);
        setPet(pett);
    }

    if(isVisible){
        return (
            <>
                return <MainScreen isDrawn={true} setVisibility={setIsVisible} petNum={petNum}/>;
            </>
        )
    }

    return (
        <>
            <div className={"botHalf"}>
                <p>Vyberte si mazlicka:</p>
                <button onClick={() => {VyberMazlicka(1)}}>
                    {isDrawn}
                    Kocka
                </button>

                <button onClick={() => {VyberMazlicka(2)}}>
                    {isDrawn}
                    Kralik
                </button>

                <button onClick={() => {VyberMazlicka(3)}}>
                    {isDrawn}
                    Dinosaurus
                </button>

                <button onClick={() => {VyberMazlicka(4)}}>
                    {isDrawn}
                    Pes
                </button>

                <button onClick={() => setVisibility(false)} style={{backgroundColor:"#FFB2B2"}}>
                    Quit
                </button>
            </div>

        </>
    )
}

export default InfoScreen