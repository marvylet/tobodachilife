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

const Load: React.FC<ShowMenu> = ({setVisibility, setMoney, setHlad, setHladValue, setEnergie, setEnergieValue, setStesti, setStestiValue, setPet, setIsLoadSuccess} ) => {

    const handleFileSelected = (file? : Blob) => {
        const fileReader = new FileReader();
        fileReader.onloadend = () =>{
            const data = fileReader.result;
            console.log(data);
            if(data) {
                //console.log(data.toString().split("-"));
                const dataList = data.toString().split("-");
                console.log(dataList);
                if(dataList.length == 8 && setMoney != null && setHlad != null && setHladValue != null && setEnergie != null && setEnergieValue != null && setStesti != null && setStestiValue != null && setPet != null){
                    setVisibility(true);

                    setMoney(Number(dataList[0]));
                    setHlad(Number(dataList[1]));
                    setHladValue(Number(dataList[2]));
                    setEnergie(Number(dataList[3]));
                    setEnergieValue(Number(dataList[4]));
                    setStesti(Number(dataList[5]));
                    setStestiValue(Number(dataList[6]));
                    setPet(Number(dataList[7]));

                    if(setIsLoadSuccess != null) {
                        setIsLoadSuccess(true);
                    }
                }else {
                    if(setIsLoadSuccess != null) {
                        setIsLoadSuccess(false);
                    }
                    console.log("Error pri nacitani dat ze souboru");
                }
            }
        };
        if(file != null)
        fileReader.readAsText(file)
    }

    return (
        <>
            <input type={"file"} max={1} min={1} onChange={e => {
                if(e.target.files != null)
                handleFileSelected(e.target.files[0])
            }} accept='.txt' style={{backgroundColor:"#FFB2B2"}}/>
        </>
    )
}


export default Load
