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

function Pet (props: PetProps) {
    const petImg = "./src/Docs/costume" + props.petNum + ".png";
    const petRIPImg = "./src/assets/costume" + props.petNum + "RIP.png";

    const energieHurt = props.maxEnergie / 4;
    const stestiHurt = props.maxStesti / 4;
    const hladHurt = props.maxHlad / 4;

    if(props.energie <= energieHurt || props.stesti <= stestiHurt || props.hlad <= hladHurt){
        return (
            <>
                <img src={petRIPImg} alt="Mazlicek umira"/>
            </>
        )
    }

    return (
        <>
            <img src={petImg} alt="Obrazek mazlicka, je v poradku momentalne"/>
        </>
    )
}

export default Pet