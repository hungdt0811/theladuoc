import { Input } from 'antd';
import React from 'react';

interface NumericInputProps {
    id?: string;
    style?: React.CSSProperties;
    value?: string;
    onChange: (value: string) => void;
}

const PhoneInput = (props: NumericInputProps) => {

    const { value, id ,onChange } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: inputValue } = e.target;
        const reg = /^-?\d*(\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
          onChange(inputValue);
        }
      };

    return (
        <Input
            id= {id}
            {...props}
            onChange={handleChange}
            value={value}
            placeholder="Nhập số điện thoại"
            maxLength={10}
      />
    )
}

export default PhoneInput