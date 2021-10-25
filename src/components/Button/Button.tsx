import React, { HTMLAttributes } from 'react';
import Icon from '../Icon/Icon';

export interface ButtonProps {
  children?: React.ReactNode;
  iconOnly?: boolean;
  icon?: string;
}

export default function Button(
  props: ButtonProps & HTMLAttributes<HTMLElement>
) {
  return (
    <button
      type="button"
      className={`rux-button ${props.iconOnly ? 'rux-button--icon-only' : ''}`}
      {...props}
    >
      {props.icon ? <span className="rux-button__icon"><Icon icon={props.icon} /></span> : null }
      {props.children}
    </button>
  );
}
