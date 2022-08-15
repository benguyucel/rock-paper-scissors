import React, { useState } from 'react'
import { useGameContext } from '../../contexts/GameContext'
import Button from '../Button'
import styled from './result.module.css'
function GameResult() {
    const { pcChoose, personChoose, handleResult, setScore, setIsStartGame } = useGameContext();
    const [text, setText] = useState("");
    const type = ['rock', 'paper', 'scissors'];
    const [loading, setLoading] = useState(true)
    const [rx, setRx] = useState("rotate-x-rock")
    const [ry, setRy] = useState("rotate-y-rock")

    useState(() => {
        const result = handleResult()
        setTimeout(() => {
            setLoading(false)
            if (result == true) {
                setScore(prev => prev + 1);
                setText("YOU WIN")

            }
            else if (result == false) {
                setScore(prev => prev - 1); setText("YOU LOSE")
            } else {
                setText("DRAFT")
            }
            setRx(`rotate-x-${type[pcChoose]}`)
            setRy(`rotate-y-${type[personChoose]}`)
        }, 1000);

    }, [])

    return (
        <>
            <div className={styled.resultText}>
                <h1>PC</h1>
                <h1>YOU</h1>
            </div>
            <div className={styled.gameResult}>
                <div className={`${styled.computer} ${loading ? styled.object : null}`}>
                    <Button type={!loading ? type[pcChoose] : 'rock'} rotate={rx} />
                </div>
                {!loading && (
                    <div className={styled.textArea}>
                        <h1>{text}</h1>
                        <button onClick={() => setIsStartGame(false)}>Play Again</button>
                    </div>
                )}
                <div className={`${styled.person} ${loading ? styled.object : null}`}>
                    <Button className={styled.object} type={!loading ? type[personChoose] : 'rock'} rotate={ry} />
                </div>
            </div>
        </>
    )
}

export default GameResult