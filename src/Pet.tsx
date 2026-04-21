

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

    petNum: number;
}

/*
function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const pet = getRandomInt(4) + 1;
*/


function Pet (props: PetProps) {
    const petImg = "src/Docs/costume" + props.petNum + ".png";
    return (
        <>
            <img src={petImg}/>
        </>
    )
    /*  <p>Hlad: {props.maxHlad}/{props.hlad}</p>
    <p>Energie: {props.maxEnergie}/{props.energie}</p>
    <p>Stesti: {props.maxStesti}/{props.stesti}</p>
    */
}

export default Pet