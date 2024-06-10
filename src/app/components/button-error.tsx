'use client';
import { FC, useState, useEffect } from 'react';
import Button, { ButtonProps } from './button';

const ButtonError: FC<ButtonProps> = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  }, [count]);
  return (
    <Button {...props} onClick={() => setCount(count + 1)}>
      Button error
    </Button>
  );
};

export default ButtonError;
