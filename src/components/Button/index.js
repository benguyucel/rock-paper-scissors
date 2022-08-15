import React from 'react'
import './button.css'
function Button({ type,  rotate, ...rest }) {
    return (
        <button {...rest} className={`${type}`}>
            <img className={rotate} src={`/img/${type}.png`} alt={type} />
        </button>
    )
}

export default Button