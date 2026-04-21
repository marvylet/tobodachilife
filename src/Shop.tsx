import type {ShowMenu} from "./types.ts";
const Shop: React.FC<ShowMenu> = ({isDrawn, setVisibility}) => {
    return (
        <>
            <div className={"shop-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <div className={"items"}>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                item
                            </button>
                            <button>
                                item
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                item
                            </button>
                            <button>
                                item
                            </button>
                        </div>
                    </div>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                item
                            </button>
                            <button>
                                item
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                item
                            </button>
                            <button>
                                item
                            </button>
                        </div>
                    </div>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                item
                            </button>
                            <button>
                                item
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                item
                            </button>
                            <button>
                                item
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={() => setVisibility(false)} style={{backgroundColor:"#FFB2B2"}}>
                    Quit
                </button>
            </div>
        </>
    )
}

export default Shop
