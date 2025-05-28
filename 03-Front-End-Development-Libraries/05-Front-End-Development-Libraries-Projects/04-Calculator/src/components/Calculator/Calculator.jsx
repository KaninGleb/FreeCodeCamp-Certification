import React from 'react'
import { useCalculator } from '../../hooks/useCalculator'
import { buttonsData } from '../../data/buttons.data.js'
import s from './Calculator.module.css'

export const Calculator = () => {
  const {
    input,
    formula,
    handleNumberClick,
    handleOperatorClick,
    handleDecimalClick,
    handleClear,
    handleEquals
  } = useCalculator()

  return (
    <div className={s.calculator}>
      <div className={s.formulaDisplay}>{formula}</div>
      <div id="display" className={s.outputDisplay}>
        {input}
      </div>
      <div className={s.buttons}>
        {buttonsData.map((button) => {
          const handleClick = () => {
            if (button.onClick === 'handleOperatorClick') {
              handleOperatorClick(button.onClickArg)
            } else if (button.onClick === 'handleNumberClick') {
              handleNumberClick(button.onClickArg)
            } else if (button.onClick === 'handleClear') {
              handleClear()
            } else if (button.onClick === 'handleEquals') {
              handleEquals()
            } else if (button.onClick === 'handleDecimalClick') {
              handleDecimalClick()
            }
          }

          const classNames = button.className
            .split(' ')
            .map((cn) => s[cn])
            .join(' ')

          return (
            <button
              key={button.id}
              id={button.id}
              className={classNames}
              onClick={handleClick}
            >
              {button.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
