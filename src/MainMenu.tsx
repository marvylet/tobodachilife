import type {ShowMenu} from "./types.ts";
import {useState} from "react";
import InfoScreen from "./InfoScreen.tsx";
import Load from "./Load.tsx";
import MainScreen from "./MainScreen.tsx";

const MainMenu: React.FC<ShowMenu> = ({isDrawn}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const [money, setMoney] = useState(0);

    const maxHlad = 50;
    const [hlad, setHlad] = useState(maxHlad);
    const [hladValue, setHladValue] = useState(2);

    const maxEnergie = 50;
    const [energie, setEnergie] = useState(maxEnergie);
    const [energieValue, setEnergieValue] = useState(3);

    const maxStesti = 50;
    const [stesti, setStesti] = useState(maxStesti);
    const [stestiValue, setStestiValue] = useState(10);

    const [petNum, setPet] = useState(0);

    const [isLoadSuccess, setIsLoadSuccess] = useState<boolean>(false);

    if(isVisible && isLoadSuccess){
        return (
            <>
                <MainScreen isDrawn={true} setVisibility={setIsVisible} petNum={petNum}
                            money={money} setMoney={setMoney}
                            hlad={hlad} setHlad={setHlad} hladValue={hladValue} setHladValue={setHladValue}
                            energie={energie} setEnergie={setEnergie} energieValue={energieValue} setEnergieValue={setEnergieValue}
                            stesti={stesti} setStesti={setStesti} stestiValue={stestiValue} setStestiValue={setStestiValue}/>
            </>
        )
    }

    if(isVisible){
        return <InfoScreen isDrawn={true} setVisibility={setIsVisible} petNum={petNum} setPet={setPet}
                           money={money} setMoney={setMoney}
                           hlad={hlad} setHlad={setHlad} hladValue={hladValue} setHladValue={setHladValue}
                           energie={energie} setEnergie={setEnergie} energieValue={energieValue} setEnergieValue={setEnergieValue}
                           stesti={stesti} setStesti={setStesti} stestiValue={stestiValue} setStestiValue={setStestiValue}/>;
    }
    return (
        <>
            <div className={"minu-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <div className={"logo"}>
                    {isDrawn}
                    <img src="src/Docs/title.png" alt="Logo" className={"logo"}/>
                </div>
                <button onClick={() => setIsVisible(true)} style={{backgroundColor:"#FFB2B2"}}>
                    Start game
                </button>
                <hr/>
                <Load isDrawn={true} setVisibility={setIsVisible}
                      setMoney={setMoney} setHlad={setHlad} setHladValue={setHladValue}
                      setEnergie={setEnergie} setEnergieValue={setEnergieValue}
                      setStesti={setStesti} setStestiValue={setStestiValue} setPet={setPet} setIsLoadSuccess={setIsLoadSuccess}></Load>
            </div>
        </>
    )
}

export default MainMenu