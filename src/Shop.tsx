import type {ShowMenu} from "./types.ts";
const Shop: React.FC<ShowMenu> = ({isDrawn, setVisibility}) => {
    return (
        <>
            <div className={"minu-Container"} style={{backgroundColor:"#FFF2D0"}}>
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
                <button onClick={() => setVisibility(false)} style={{backgroundColor:"#FFB2B2"}}>
                    Quit
                </button>
            </div>
        </>
    )
}

export default Shop
