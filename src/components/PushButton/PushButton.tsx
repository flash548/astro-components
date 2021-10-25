import React, { ChangeEvent, HTMLAttributes } from 'react';

export interface PushButtonProps {
  id: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PushButton(
  props: PushButtonProps & HTMLAttributes<HTMLInputElement>
) {
  return (
    <div className="rux-pushbutton">
      <input
        className="rux-pushbutton__input"
        id="ruxSwitch"
        type="checkbox"
        disabled={props.disabled}
        checked={props.checked}
      />
      <label className="rux-pushbutton__button" htmlFor="ruxSwitch">
        {props.label}
      </label>
    </div>
  );
}
