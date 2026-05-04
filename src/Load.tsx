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

function Load() {

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
