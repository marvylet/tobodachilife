
interface PetProps {
    maxHlad: number;
    hlad: number;
    setHlad: (hlad: number) => void;

    /*
    maxEnergie: number;
    energie: number;
    setEnergie: (energie: number) => void;

    maxStesti: number;
    stesti: number;
    setStesti: (stesti: number) => void;
     */
}

function Pet (props: PetProps) {
    let text = "";

    function UpdateHlad(){
        if(props.hlad > props.maxHlad){
            props.setHlad(props.maxHlad);
        }

        if((props.hlad - 2) <= 0){
            props.setHlad(0);
            text = "Game Over!"
        }else{
            props.setHlad(props.hlad - 2);
            text = String(props.hlad);
        }
    }

    setInterval(UpdateHlad, 15000);

    return (
        <>
            <p>{props.maxHlad}/{text}</p>
        </>
    )
}

export default Pet