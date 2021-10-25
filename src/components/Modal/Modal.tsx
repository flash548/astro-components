import React, { HTMLAttributes } from 'react';
import './Modal.scss';

export interface ModalProps {
  title?: string;
  content: React.ReactNode;
  show: boolean;
  footer?: React.ReactNode;
}

export default function Modal(
  props: ModalProps & HTMLAttributes<HTMLInputElement>
) {
  return (
    <div
      className={
        props.show ? 'rux-modal-container' : 'rux-modal-container__hidden'
      }
    >
      <div className="rux-modal modal">
        <div className="rux-modal__titlebar modal-header">{props.title}</div>
        <div className="rux-modal__content">{props.content}</div>
        <div className="rux-button-group modal-footer">{props.footer}</div>
      </div>
    </div>
  );
}
