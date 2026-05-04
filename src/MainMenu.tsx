import type {ShowMenu} from "./types.ts";
import {useState} from "react";
import InfoScreen from "./InfoScreen.tsx";
import Load from "./Load.tsx";

const MainMenu: React.FC<ShowMenu> = ({isDrawn}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    if(isVisible){
        return <InfoScreen isDrawn={true} setVisibility={setIsVisible}/>;
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
                <Load></Load>
            </div>
        </>
    )
}

export default MainMenu