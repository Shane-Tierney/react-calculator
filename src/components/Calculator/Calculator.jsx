import React, { useState } from 'react'

const calculation = (numberOne, numberTwo, operator) => {
    let response
    
    if (!numberOne || !numberTwo) {
        response = "Please provide a valid number for both operands"
        return response
    }

    if (operator === 'add') {
        response = Number(numberOne) + Number(numberTwo)
    } else if (operator === 'subtract') {
        response = Number(numberOne) - Number(numberTwo)
    } else if (operator === 'multiply') {
        response = Number(numberOne) * Number(numberTwo)
    } else if (operator === 'divide') {
        response = Number(numberOne) / Number(numberTwo)
    } else {
        response = "Please select an operator"
    }

    return response
}

const Calculator = () => {
    const [numberOne, setNumberOne] = useState("")
    const [operator, setOperator] = useState("")
    const [numberTwo, setNumberTwo] = useState("")
    const [answer, setAnswer] = useState('')
    
    return (
        <>
            <input type= 'number' name='numberOne' onChange={(event) => {setNumberOne(event.target.value)}}/>
            <select onChange={(event) => {setOperator(event.target.value)}}>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type= 'number' name='numberTwo' onChange={(event) => {setNumberTwo(event.target.value)}}/>
            <button type='submit' name='answer' onclick={setAnswer(calculation(numberOne, numberTwo, operator))}>=</button>
            {
                answer ? <div className='answer'>{answer}</div> : null
            }
        </>
    )
}

export default Calculator;