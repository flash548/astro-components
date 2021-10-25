import React, { ChangeEvent, HTMLAttributes } from 'react';

export interface CheckBoxProps {
  id: string;
  label?: string;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBox(
  props: CheckBoxProps & HTMLAttributes<HTMLInputElement>
) {
  return (
    <div className="rux-checkbox">
      <input {...props} type='checkbox' id={`${props.id}_checkbox`} checked={props.checked ?? false} />
      <label htmlFor={`${props.id}_checkbox`}>{props.label ?? ''} </label>
    </div>
  );
}
