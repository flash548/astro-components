import React from 'react';
import './Card.scss';

export interface CardProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  width?: number | string;
  height?: number | string;
}

export default function Card(props: CardProps) {
  return (<div className={`rux-card card-auto-size`}>
      <div className='rux-card__header'>{props.header}</div>
      <div className='rux-card__content'>{props.body}</div>
    </div>)
}
