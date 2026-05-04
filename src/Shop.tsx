import type {ShowMenu} from "./types.ts";
import {useState} from "react";

const Shop: React.FC<ShowMenu> = ({isDrawn, setVisibility, money, setMoney, setHladValue, setEnergieValue, setStestiValue, hladValue, energieValue, stestiValue}) => {

    const [info, setInfo] = useState("Nebylo nic zatim nakoupeno.");

    function Buffs1(price: number, stat: number, boost:number) {
        switch (stat) {
            case 1:
                if (hladValue != undefined) {
                    if (money != undefined && money >= price && setHladValue != undefined && setMoney != undefined) {
                        setHladValue(hladValue * boost);
                        setMoney(money - price);
                        setInfo("Byl koupen boost pro krmeni mazlicka za " + price);
                    } else {
                        setInfo("Nemate dost penez, polozka stoji " + price);
                    }
                }
                break;
            case 2:
                if (stestiValue != undefined) {
                    if (money != undefined && money >= price && setStestiValue != undefined && setMoney != undefined) {
                        setStestiValue(stestiValue * boost);
                        setMoney(money - price);
                        setInfo("Byl koupen boost pro hrani si s mazlickem za " + price);
                    } else {
                        setInfo("Nemate dost penez, polozka stoji " + price);
                    }
                }
                    break;
                case 3:
                    if (energieValue != undefined) {
                        if (money != undefined && money >= price  && setEnergieValue != undefined && setMoney != undefined) {
                            setEnergieValue(energieValue * boost);
                            setMoney(money - price);
                            setInfo("Byl koupen boost pro spanek mazlicka za " + price);
                        } else {
                            setInfo("Nemate dost penez, polozka stoji " + price);
                        }
                    }
                        break;
                    }
                }



    return (
        <>
            <div className={"shop-Container"} style={{backgroundColor:"#FFF2D0"}}>
                <p>{money}</p>
                <p>{info}</p>
                <div className={"items"}>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button onClick={() => Buffs1(10, 1, 1.5)}>
                                {isDrawn}
                                <img src={new URL('/assets/Food/food1.png', import.meta.url).href} alt="jidlo 1"/>
                            </button>
                            <button onClick={() => Buffs1(25, 1, 1.75)}>
                                <img src={new URL('/assets/Food/food2.png', import.meta.url).href} alt="jidlo 2"/>
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button onClick={() => Buffs1(50, 1, 2)}>
                                {isDrawn}
                                <img src={new URL('/assets/Food/food3.png', import.meta.url).href} alt="jidlo 3"/>
                            </button>
                            <button onClick={() => Buffs1(75, 1, 2.25)}>
                                <img src={new URL('/assets/Food/food4.png', import.meta.url).href} alt="jidlo 4"/>
                            </button>
                        </div>
                    </div>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button onClick={() => Buffs1(10, 3, 1.5)}>
                                {isDrawn}
                                <img src={new URL('/assets/Rest/rest1.png', import.meta.url).href} alt="odpocinek 1"/>
                            </button>
                            <button onClick={() => Buffs1(25, 3, 1.75)}>
                                <img src={new URL('/assets/Rest/rest2.png', import.meta.url).href} alt="odpocinek 2"/>
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button onClick={() => Buffs1(50, 3, 2)}>
                                {isDrawn}
                                <img src={new URL('/assets/Rest/rest3.png', import.meta.url).href} alt="odpocinek 3"/>
                            </button>
                            <button onClick={() => Buffs1(75, 3, 2.25)}>
                                <img src={new URL('/assets/Rest/rest4.png', import.meta.url).href} alt="odpocinek 4"/>
                            </button>
                        </div>
                    </div>
                    <div className={"shopBox"}>
                        <div className={"shopInbox"}>
                            <button onClick={() => Buffs1(10, 2, 1.5)}>
                                {isDrawn}
                                <img src={new URL('/assets/Toys/toy1.png', import.meta.url).href} alt="hracka 1"/>
                            </button>
                            <button onClick={() => Buffs1(10, 2, 1.75)}>
                                <img src={new URL('/assets/Toys/toy2.png', import.meta.url).href} alt="hracka 2"/>
                            </button>
                        </div>
                        <div className={"shopInbox"}>
                            <button onClick={() => Buffs1(10, 2, 2)}>
                                {isDrawn}
                                <img src={new URL('/assets/Toys/toy3.png', import.meta.url).href} alt="hracka 3"/>
                            </button>
                            <button onClick={() => Buffs1(10, 2, 2.25)}>
                                <img src={new URL('/assets/Toys/toy4.png', import.meta.url).href} alt="hracka 4"/>
                            </button>
                        </div>
                    </div>
                </div>
                <button onClick={() => setVisibility(false)} style={{backgroundColor:"#FFB2B2"}}>
                    Zpět
                </button>
            </div>
        </>
    )
}

export default Shop
