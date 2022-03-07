import React from 'react'
import cls from './Input.module.scss'

type TProps = {
  label?: string
  type: 'text' | 'number' | 'password'
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  className?: string
  required?: boolean
}

const Input: React.FC<TProps> = ({
  label,
  type,
  setValue,
  value,
  className,
  required,
}) => {
  return (
    <div className={className ? cls.Input + ' ' + className : cls.Input}>
      {label && (
        <label>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Input
