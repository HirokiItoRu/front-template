import React, { useState } from 'react';
import InputForm from '@/components/molecules/InputForm';
import Line from '@/components/atoms/Line';

export type InputNameProps = {}

const InputName = (bi: InputNameProps) => {
  return (
    <>
      <InputForm
        label='名前'
        type='text'
      />
      <div className='py-2'/>
      <InputForm
        label='カナ'
        type='text'
      />
      <div className='py-2'/>
      <Line />
    </>
  );
};

export default InputName