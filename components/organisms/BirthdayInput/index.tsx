import React, { useState } from 'react';
import Button from '../../atoms/Button';
import InputForm from '@/components/molecules/InputForm';

export type BirthdayInputProps = {
}

const BirthdayInput = (bi: BirthdayInputProps) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  return (
    <form method='post'>
      <InputForm
        type='text'
        label='氏名'
        style='Default'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='name'
        required={true}
      />
      <InputForm
        type='number'
        label='数字'
        style='Default'
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder='number'
        required={true}
      />
      <InputForm
        type='date'
        label='日にち'
        required={true}
      />
      <span className='px-4'></span>
      <Button
        type='submit'
      >送信</Button>

    </form>
  );
};

export default BirthdayInput