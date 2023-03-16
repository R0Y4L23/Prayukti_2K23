import React from 'react'

const CyberpunkButton = ({ text, className, onClick }) => {
    return (
        <button className={"btn cbb" + className} onClick={onClick}>
            <span className="btn__content">{text}</span>
            <span className="btn__glitch"></span>
            <span className="btn__label">r25</span>
        </button>
    )
}

export default CyberpunkButton