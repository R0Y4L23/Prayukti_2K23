import React from 'react'

const CyberpunkButton = ({ text, className, onClick }) => {
    return (
        <button class={"btn " + className} onClick={onClick}>
            <span class="btn__content">{text}</span>
            <span class="btn__glitch"></span>
            <span class="btn__label">r25</span>
        </button>
    )
}

export default CyberpunkButton