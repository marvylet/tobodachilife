/*
interface PetProps {
    maxHlad: number;
    hlad: number;
    setHlad: (hlad: number) => void;

    maxEnergie: number;
    energie: number;
    setEnergie: (energie: number) => void;

    maxStesti: number;
    stesti: number;
    setStesti: (stesti: number) => void;

    petNum?: number;
}

 */

import type {ShowMenu} from "./types.ts";

const Save: React.FC<ShowMenu> = ({setVisibility, money, hlad, hladValue, energie, energieValue, stesti, stestiValue} ) => {
/*
    const handleFileSelected = (file? : Blob) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () =>{
            const data = fileReader.result;
            console.log(data);
            if(data)
            console.log(data.toString().split("-"));
        };
        if(file != null)
        fileReader.readAsText(file)
    }

 */
    const download = () =>{
        const fileData = money + "-" + hlad + "-" + hladValue + "-" + energie + "-" + energieValue + "-" + stesti + "-" + stestiValue;
        const blob = new Blob([fileData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = "user-info.txt";
        link.href = url;
        link.click();
    };

    return (
        <>
            <button onClick={() => {setVisibility(false); setVisibility(false); download();}} style={{backgroundColor:"#FFB2B2"}}>
                Quit
            </button>
        </>
    )
}

export default Save
