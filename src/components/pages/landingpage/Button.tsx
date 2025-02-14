import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'text' | 'outlined' | 'contained';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'contained' }) => {
  return (
    <MuiButton variant={variant} color="primary" onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
