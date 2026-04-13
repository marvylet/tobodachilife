import type {ShowMenu} from "./types.ts";
import {useState} from "react";

const MainMenu: React.FC<ShowMenu> = ({isDrawn}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    if(isVisible){
        return <></>;
    }
    return (
        <>
            <div className={"minu-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <div className={"logo"}>
                    {isDrawn}
                </div>
                <button onClick={() => setIsVisible(true)} style={{backgroundColor:"#FFB2B2"}}>
                    Start game
                </button>
                <hr/>
                <input type={"file"} style={{backgroundColor:"#FFB2B2"}}/>
            </div>
        </>
    )
}

export default MainMenu