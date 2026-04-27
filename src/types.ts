export type Pet = {
    energie: number;
    hlad: number;
    stesti: number;
    typ: string;
}

export interface ShowMenu {
    isDrawn: boolean,
    setVisibility: (visible: boolean) => void,
    petNum?: number

    maxHlad?: number;
    hlad?: number;
    setHlad?: (hlad: number) => void;

    maxEnergie?: number;
    energie?: number;
    setEnergie?: (energie: number) => void;

    maxStesti?: number;
    stesti?: number;
    setStesti?: (stesti: number) => void;

    money?: number;
    setMoney?: (money: number) => void;

    hladValue?: number;
    energieValue?: number;
    stestiValue?: number;

    setHladValue?: (hladValue: number) => void;
    setEnergieValue?: (energieValue: number) => void;
    setStestiValue?: (stestiValue: number) => void;

}