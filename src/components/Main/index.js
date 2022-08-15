import React from 'react'



import style from './main.module.css'
import { useGameContext } from '../../contexts/GameContext'
import Button from '../Button';

function Main() {
    const { handleClick } = useGameContext();

    return (
        <div className={style.main}>
            <button onClick={handleClick} value={0} className={style.rock}>
                <img src={'/img/rock.png'} alt={'rock'} />
            </button>
            <button onClick={handleClick} value={1} className={style.paper}>
                <img src={'/img/paper.png'} alt={'paper'} />
            </button>
            <button onClick={handleClick} value={2} className={style.scissors}>
                <img src={'/img/scissors.png'} alt={'scissors'} />
            </button>
        </div>
    )
}
export default Main