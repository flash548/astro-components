import React, { HTMLAttributes } from 'react';
export interface TextFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
}

export default function TextField(
  props: TextFieldProps & HTMLAttributes<HTMLInputElement>
) {
  return (
    <div className="rux-form-field">
      {props.label && <label htmlFor={props.id} className="rux-form-field__label">{props.label}</label>}
      <input {...props} id={props.id}
        className="rux-input"
        required={props.required}
        placeholder={props.placeholder}
        value={props.value ?? ''}
      />
    </div>
  );
}
