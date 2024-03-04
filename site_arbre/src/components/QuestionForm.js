import { useState } from 'react'

function checkValue(value) {
    if (!value.includes('f')) {
        setInputValue(value)
    }

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}
//const isInputError = inputValue.includes('f') 


}

export default QuestionForm ;