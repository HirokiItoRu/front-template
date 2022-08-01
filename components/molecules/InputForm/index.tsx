import React, { ReactNode } from 'react';

export type InputFormProps = {
  disabled?: boolean
  label: string
  style?: 'Default' | 'Primary'
  onChange?: (e: any) => void
  value?: string
  placeholder?: string
  type: 'text' | 'password' | 'email' | 'number' | 'date'
  required?: boolean
}

const InputForm = (input: InputFormProps) => {

  // const defaultStyle = 'bg-gray-200 hover:bg-gray-100 text-white rounded px-4 py-2'
  // const primaryStyle = 'bg-red-200 hover:bg-red-100 text-white rounded px-4 py-2'

  return (
    <label className={''}>
      {`${input.label}`}
      <span className='px-2' />
      <input
        className='text-base border rounded px-2 py-2'
        placeholder={input.placeholder}
        value={input.value}
        onChange={input.onChange}
        disabled={input.disabled}
        type={input.type}
        required={input.required}
      />
    </label>
  );
};

export default InputForm;