import React from 'react'
import cls from './Button.module.scss'

type TProps = {
  text: string
  className?: string
  onClick?: () => {}
}

const Button: React.FC<TProps> = ({ text, onClick, className }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={className ? cls.Button + ' ' + className : cls.Button}>
      {text}
    </button>
  )
}

export default Button
