import type {ShowMenu} from "./types.ts";
const Shop: React.FC<ShowMenu> = ({isDrawn, setVisibility}) => {
    return (
        <>
            <div className={"minu-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <div className={"logo"}>
                    {isDrawn}
                </div>
                <div className={"shopBox"}>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                </div>
                <hr/>
                <div className={"logo"}>
                    {isDrawn}
                </div>
                <div className={"shopBox"}>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                </div>
                <hr/>
                <div className={"logo"}>
                    {isDrawn}
                </div>
                <div className={"shopBox"}>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                    <button>
                        item
                    </button>
                    <button>
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
