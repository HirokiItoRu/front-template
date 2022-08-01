import React, { ReactNode } from 'react'

export type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  loading?: boolean
  style?: 'Default' | 'Primary'
  onClick?: (e: any) => void
}

const Button = (button: ButtonProps) => {
  const { type = 'button' } = button

  // const defaultStyle = 'bg-gray-200 hover:bg-gray-100 text-white rounded px-4 py-2'
  // const primaryStyle = 'bg-red-200 hover:bg-red-100 text-white rounded px-4 py-2'

  return (
    <button
      type={type}
      className={`${button.style === 'Primary' ? 'bg-red-200' : 'bg-gray-200'} hover:bg-gray-100 text-white rounded px-4 py-2`}
      disabled={button.disabled ? true : false}
      onClick={button.onClick}
    >
      {button.children}
    </button>
  )
}

export default Button;