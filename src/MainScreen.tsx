import type {ShowMenu} from "./types.ts";
import {useEffect, useState} from "react";
import Shop from "./Shop.tsx";
import Pet from "./Pet.tsx";

const MainScreen: React.FC<ShowMenu> = ({isDrawn, setVisibility}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);


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

    if(isVisible){
        return <Shop isDrawn={true} setVisibility={setIsVisible}/>;
    }

    return (
        <>
            <div className={"pet-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <div className={"topHalf"}>
                    <div className={"indicators"}>
                        <p>
                            jidlo:
                            <progress id="file" value={hlad * 2} max="100"> 32% </progress>
                        </p>
                        <p>
                            zabava:
                            <progress id="file" value={stesti * 2} max="100"> 52% </progress>
                        </p>
                        <p>
                            spanek:
                            <progress id="file" value={energie * 2} max="100"> 92% </progress>
                        </p>
                    </div>
                    <div className={"mazlicek-div"}>
                        {isDrawn}
                        <Pet
                            maxHlad={maxHlad} setHlad={setHlad} hlad={hlad}
                            maxEnergie={maxEnergie} setEnergie={setEnergie} energie={energie}
                            maxStesti={maxStesti} setStesti={setStesti} stesti={stesti} />
                    </div>
                </div>
                <div className={"botHalf"}>
                    <div className={"ofset"}>
                        <div className={"playerActions"}>
                            <button style={{backgroundColor:"#FFB2B2"}}>
                                Nakrmit
                            </button>
                            <button style={{backgroundColor:"#FFB2B2"}}>
                                Hrat si
                            </button>
                            <button style={{backgroundColor:"#FFB2B2"}}>
                                Poslat spat
                            </button>
                        </div>
                        <div className={"shop-quit"}>
                            <button onClick={() => setIsVisible(true)} style={{backgroundColor:"#FFB2B2"}}>
                                Obchod
                            </button>
                            <button onClick={() => setVisibility(false)} style={{backgroundColor:"#FFB2B2"}}>
                                Quit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen
