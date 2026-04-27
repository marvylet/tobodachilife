import type {ShowMenu} from "./types.ts";
import {useEffect, useState} from "react";
import Shop from "./Shop.tsx";
import Pet from "./Pet.tsx";

const MainScreen: React.FC<ShowMenu> = ({isDrawn, setVisibility, petNum} ) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);


    const maxHlad = 50;
    const [hlad, setHlad] = useState(maxHlad);

    const maxEnergie = 50;
    const [energie, setEnergie] = useState(maxEnergie);

    const maxStesti = 50;
    const [stesti, setStesti] = useState(maxStesti);

    const [info, setInfo] = useState("Mazlicek zatim nebyl nakrmen, nebyl poslan spat a nehral jste si s nim.");

    /**
     * method for changing the pets attributes
     * @param value - by how much the value will be increased (except for energy which has a set value)
     * @param pet - which value will be changed (1 - hunger, 2 - happiness, 3 - energy/sleep)
     */
    function AddValue(value: number, pet: number) {
        switch(pet){
            case 1:
                if((hlad + value) < maxHlad){
                    setHlad(hlad + value);
                    setInfo("Mazlicek byl nakrmen.");
                }else setInfo("Moc jidla pro mazlicka.");
                break;

            case 2:
                if((stesti + value) < maxStesti){
                    setStesti(stesti + value);
                    setInfo("Hral jste si s mazlickem.");
                }else setInfo("Mazlicek si zatim nechce tak moc hrat.");
                break;

            case 3:
                if(energie <= 25){
                    setEnergie(energie + 20);
                    setInfo("Mazlicek byl poslan jit spat.");
                }else setInfo("Mazlicek neni tak unaveny.");
                break;
        }
    }

    /**
     *
     * methods for intervals
     */
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
                            <progress id="file" value={hlad} max={maxHlad}> 32% </progress>
                        </p>
                        <p>
                            zabava:
                            <progress id="file" value={stesti} max={maxStesti}> 52% </progress>
                        </p>
                        <p>
                            spanek:
                            <progress id="file" value={energie} max={maxEnergie}> 92% </progress>
                        </p>
                        <p>{info}</p>
                    </div>
                    <div className={"mazlicek-div"}>
                        {isDrawn}
                        <Pet
                            maxHlad={maxHlad} setHlad={setHlad} hlad={hlad}
                            maxEnergie={maxEnergie} setEnergie={setEnergie} energie={energie}
                            maxStesti={maxStesti} setStesti={setStesti} stesti={stesti}
                            petNum={petNum}/>
                    </div>
                </div>
                <div className={"botHalf"}>
                    <div className={"ofset"}>
                        <div className={"playerActions"}>
                            <button style={{backgroundColor:"#FFB2B2"}} onClick={() => AddValue(5, 1)}>
                                Nakrmit
                            </button>
                            <button style={{backgroundColor:"#FFB2B2"}} onClick={() => AddValue(7, 2)}>
                                Hrat si
                            </button>
                            <button style={{backgroundColor:"#FFB2B2"}} onClick={() => AddValue(5, 3)}>
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
