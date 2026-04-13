import type {ShowMenu} from "./types.ts";
import {useState} from "react";
import Shop from "./Shop.tsx";

const MainScreen: React.FC<ShowMenu> = ({isDrawn}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    if(isVisible){
        return <Shop isDrawn={true}/>;
    }
    return (
        <>
            <div className={"minu-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <p>
                    jidlo:
                </p>
                <progress id="file" value="32" max="100"> 32% </progress>
                <p>
                    zabava:
                </p>
                <progress id="file" value="52" max="100"> 52% </progress>
                <p>
                    spanek:
                </p>
                <progress id="file" value="92" max="100"> 92% </progress>
                <div className={"mazlicek-div"}>
                    {isDrawn} tady bude obrazek, urcite
                </div>
                <hr/>
                <button style={{backgroundColor:"#FFB2B2"}}>
                    Nakrmit
                </button>
                <button style={{backgroundColor:"#FFB2B2"}}>
                    Hrat si
                </button>
                <button style={{backgroundColor:"#FFB2B2"}}>
                    Poslat spat
                </button>
                <hr/>

                <button onClick={() => setIsVisible(true)} style={{backgroundColor:"#FFB2B2"}}>
                    Obchod
                </button>
            </div>
        </>
    )
}

export default MainScreen
