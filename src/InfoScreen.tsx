import type {ShowMenu} from "./types.ts";
import {useState} from "react";
import MainScreen from "./MainScreen.tsx";

const InfoScreen: React.FC<ShowMenu> = ({isDrawn, setVisibility, money, setMoney, hlad, setHlad, hladValue, setHladValue, energie, setEnergie, energieValue, setEnergieValue, stesti, setStesti, stestiValue, setStestiValue, setPet, petNum}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function VyberMazlicka(pett: number){
        if(setPet != null) {
            setIsVisible(true);
            setPet(pett);
        }
    }

    if(isVisible){
        return (
            <>
                <MainScreen isDrawn={true} setVisibility={setVisibility} petNum={petNum}
                money={money} setMoney={setMoney}
                hlad={hlad} setHlad={setHlad} hladValue={hladValue} setHladValue={setHladValue}
                energie={energie} setEnergie={setEnergie} energieValue={energieValue} setEnergieValue={setEnergieValue}
                stesti={stesti} setStesti={setStesti} stestiValue={stestiValue} setStestiValue={setStestiValue}/>
            </>
        )
    }

    return (
        <>
            <div className={"info"}>
                <p>Vyberte si mazlicka:</p>
                <button onClick={() => {
                    VyberMazlicka(1);
                }}>
                    {isDrawn}
                    Kocka
                </button>

                <button onClick={() => {
                    VyberMazlicka(2);
                }}>
                    {isDrawn}
                    Kralik
                </button>

                <button onClick={() => {
                    VyberMazlicka(3);
                }}>
                    {isDrawn}
                    Dinosaurus
                </button>

                <button onClick={() => {
                    VyberMazlicka(4);
                }}>
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