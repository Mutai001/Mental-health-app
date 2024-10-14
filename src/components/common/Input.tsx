// import React from 'react';
import { TextField } from '@mui/material';

type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange }) => {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full bg-white dark:bg-gray-800 text-primary dark:text-white"
      InputLabelProps={{
        className: 'text-gray-700 dark:text-gray-300',
      }}
    />
  );
};

export default Input;
