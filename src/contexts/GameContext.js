import { createContext, useContext, useState } from "react";

const GameContext = createContext();
export const GameProviver = ({ children }) => {
    /*
     ROCK      = 0
     PAPER     = 1
     Scissors  = 2
     const winScenarioPC = ['02','10','21']
     */
    const [pcChoose, setPcChoose] = useState(0);
    const [personChoose, setPersonChoose] = useState(0);
    const [score, setScore] = useState(0);
    const [isStartGame, setIsStartGame] = useState(false)
    const getRandomChoose = () => {
        return String(Math.floor(Math.random() * 3));
    }


    const handleClick = (e) => {
        setIsStartGame(false)
        setPcChoose(getRandomChoose())
        setPersonChoose(e.currentTarget.value)
        setIsStartGame(true)
    }

    const handleResult = () => {
        if (pcChoose === personChoose) return;
        const combine = pcChoose + personChoose;
        const winScenarioPC = ['02', '10', '21'].indexOf(combine) == -1;
        return winScenarioPC
    }

    const values = { handleClick, isStartGame, personChoose, pcChoose, handleResult, score, setScore, setIsStartGame }
    return <GameContext.Provider value={values}>{children}</GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)