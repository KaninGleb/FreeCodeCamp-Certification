import { useState } from 'react'

export const useCalculator = () => {
  const [input, setInput] = useState('0')
  const [formula, setFormula] = useState('')
  const [prevValue, setPrevValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const performCalculation = (firstOperand, secondOperand, operation) => {
    switch (operation) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return firstOperand / secondOperand
      default:
        return secondOperand
    }
  }

  const handleNumberClick = (num) => {
    if (waitingForOperand) {
      setInput(num)
      setWaitingForOperand(false)
      setFormula((prev) => `${prev} ${num}`)
    } else {
      setInput(input === '0' ? num : input + num)
      setFormula((prev) => {
        if (prev === '' || prev.endsWith('=')) {
          return num
        } else if (prev.endsWith(' ') || prev.endsWith('-')) {
          return prev + num
        } else {
          return prev === '0' ? num : prev + num
        }
      })
    }
  }

  const handleOperatorClick = (op) => {
    const inputValue = parseFloat(input)

    if (op === '-' && (input === '0' || waitingForOperand || input === '-')) {
      setInput('-')
      setFormula((prev) => (prev.endsWith(' ') ? prev + '-' : prev === '' ? '-' : prev + ' -'))
      setWaitingForOperand(false)
      return
    }

    if (operator && waitingForOperand) {
      if (op !== '-') {
        setOperator(op)
        setFormula((prev) => {
          const parts = prev.split(' ')
          if (parts[parts.length - 1] === '-' && parts.length > 2) {
            return prev.slice(0, -3) + ' ' + op
          }
          return prev.slice(0, -1) + op
        })
      }
      return
    }

    if (prevValue === null) {
      setPrevValue(inputValue)
    } else if (operator) {
      const result = performCalculation(prevValue, inputValue, operator)
      setPrevValue(result)
      setInput(String(result))
      setFormula(`${result} ${op}`)
    }

    setOperator(op)
    setWaitingForOperand(true)
    setFormula((prev) => {
      if (prev.endsWith('=')) {
        return input + ' ' + op
      } else if (prev === '' || prev.endsWith(' ')) {
        return prev + op
      } else {
        return prev + ' ' + op
      }
    })
  }

  const handleDecimalClick = () => {
    if (waitingForOperand) {
      setInput('0.')
      setFormula((prev) => prev + '0.')
      setWaitingForOperand(false)
      return
    }

    if (!input.includes('.')) {
      setInput(input + '.')
      setFormula((prev) => prev + '.')
    }
  }

  const handleClear = () => {
    setInput('0')
    setFormula('')
    setPrevValue(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const handleEquals = () => {
    if (operator === null || waitingForOperand) return

    const inputValue = parseFloat(input)
    let result = inputValue

    if (prevValue !== null && operator) {
      result = performCalculation(prevValue, inputValue, operator)
      setFormula(`${prevValue} ${operator} ${inputValue} = ${result}`)
    } else {
      setFormula(`${inputValue} = ${result}`)
    }

    setInput(String(result))
    setPrevValue(result)
    setOperator(null)
    setWaitingForOperand(true)
  }

  return {
    input,
    formula,
    handleNumberClick,
    handleOperatorClick,
    handleDecimalClick,
    handleClear,
    handleEquals,
  }
}
