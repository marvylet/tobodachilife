import type {ShowMenu} from "./types.ts";
import {useState} from "react";
const Shop: React.FC<ShowMenu> = ({isDrawn}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    if(isVisible){
        return <></>;
    }
    return (
        <>
            <div className={"minu-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <div className={"logo"}>
                    {isDrawn}

                    <button onClick={() => setIsVisible(true)} style={{backgroundColor:"#FFB2B2"}}>
                        urcite spatky... urcite
                    </button>
                </div>
                <div style={{backgroundColor:"#FFB2B2"}}>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <br/>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                </div>
                <hr/>
                <div className={"logo"}>
                    {isDrawn}
                </div>
                <div style={{backgroundColor:"#FFB2B2"}}>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <br/>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                </div>
                <hr/>
                <div className={"logo"}>
                    {isDrawn}
                </div>
                <div style={{backgroundColor:"#FFB2B2"}}>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <br/>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                    <button  style={{backgroundColor:"#FFB2B2"}}>
                        item
                    </button>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default Shop
