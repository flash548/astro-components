import './Icon.scss';

export interface IconProps {
  icon: string;
  desc?: string;
  viewBox?: string;
  size?: string;
  title?: string;
  text?: string;
}

export default function Icon(props: IconProps) {
  return (
    <div>
      <span className={'icon-align'}>
        <svg
          className="rux-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={props.viewBox ?? '0 0 24 24'}
          focusable="false"
          alignmentBaseline={'after-edge'}
        >
          <title>{props.title ?? ''}</title>

          <use href={`/static/icons/astro.svg#${props.icon}`}></use>
        </svg>
      </span>
      <span className={'icon-align'}>{props.text ?? ''}</span>
    </div>
  );
}
