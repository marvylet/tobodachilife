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
                                <img src="src/assets/Food/food1.png" alt=""/>
                            </button>
                            <button>
                                <img src="src/assets/Food/food2.png" alt=""/>
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                <img src="src/assets/Food/food3.png" alt=""/>
                            </button>
                            <button>
                                <img src="src/assets/Food/food4.png" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                <img src="src/assets/Rest/rest1.png" alt=""/>
                            </button>
                            <button>
                                <img src="src/assets/Rest/rest2.png" alt=""/>
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                <img src="src/assets/Rest/rest3.png" alt=""/>
                            </button>
                            <button>
                                <img src="src/assets/Rest/rest4.png" alt=""/>
                            </button>
                        </div>
                    </div>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                <img src="src/assets/Toys/toy1.png" alt=""/>
                            </button>
                            <button>
                                <img src="src/assets/Toys/toy2.png" alt=""/>
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button>
                                {isDrawn}
                                <img src="src/assets/Toys/toy3.png" alt=""/>
                            </button>
                            <button>
                                <img src="src/assets/Toys/toy4.png" alt=""/>
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
