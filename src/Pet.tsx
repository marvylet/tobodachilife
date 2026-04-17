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
}

function Pet (props: PetProps) {
    return (
        <>
            <img src={"src/Docs/costume3.png"}/>
        </>
    )
    /*  <p>Hlad: {props.maxHlad}/{props.hlad}</p>
    <p>Energie: {props.maxEnergie}/{props.energie}</p>
    <p>Stesti: {props.maxStesti}/{props.stesti}</p>
    */
}

export default Pet