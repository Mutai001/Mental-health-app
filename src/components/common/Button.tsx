import React from 'react';
import { Button as MUIButton } from '@mui/material';

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'text' | 'outlined' | 'contained';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'contained' }) => {
  return (
    <MUIButton
      onClick={onClick}
      variant={variant}
      className="text-white bg-primary dark:bg-secondary font-bold py-2 px-4 rounded"
    >
      {label}
    </MUIButton>
  );
};

export default Button;
