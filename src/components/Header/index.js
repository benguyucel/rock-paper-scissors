import React from 'react'
import { useGameContext } from '../../contexts/GameContext'
import styled from './header.module.css'
function Header() {
    const { score } = useGameContext();
    return (
        <div className={styled.header}>
            <div className={styled.logo}>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>scissors</span>
            </div>
            <div className={styled.score}>
                <span>SCORE</span>
                <span>{score}</span>
            </div>
        </div>
    )
}

export default Header