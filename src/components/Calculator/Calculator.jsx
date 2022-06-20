import React, { useState } from 'react'

const calculation = (numberOne, numberTwo, operator) => {
    let response
    
    if (!numberOne || !numberTwo) {
        response = "Please provide a valid number for both operands"
        return <div className='error'> {response} </div>
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
        return <div className='error'>Please select an operator</div>
    }

    return response
}

const Calculator = () => {
    const [numberOne, setNumberOne] = useState("")
    const [operator, setOperator] = useState("")
    const [numberTwo, setNumberTwo] = useState("")
    const [answer, setAnswer] = useState('')
    
    return (
        <div className='Calculator'>
            <input type= 'number' name='numberOne' onChange={(event) => {setNumberOne(event.target.value)}}/>
            <select defaultValue='' onChange={(event) => {setOperator(event.target.value)}}>
                <option value="default"> </option>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>
            <input type= 'number' name='numberTwo' onChange={(event) => {setNumberTwo(event.target.value)}}/>
            <button name='answer' onClick={(event) => {setAnswer(calculation(numberOne, numberTwo, operator))}}>=</button>
            <input type='number' value= {answer}/>
            { typeof(answer) !== 'number' ? <div className='answer'>{answer}</div> : null }
        </div>
    )
}

export default Calculator;