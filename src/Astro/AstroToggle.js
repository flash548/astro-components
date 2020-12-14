import React from 'react';

export default function AstroToggle(props) {
    const [checked, setChecked] = React.useState(props.checked || false);

    const clicked = (event) => {
        setChecked(!checked);
        props.onChange && props.onChange(event);
    }

    return (
        <>
            <div>
                <div style={{margin: 5, display: 'inline-block'}}>
                    <div className='rux-toggle' onClick={clicked}>
                        <input className="rux-toggle__input" type="checkbox" 
                            id={props.id}
                            disabled={props.disabled || false}
                            checked={checked}
                            onChange={() => {}}
                        />
                        <label className="rux-toggle__button" htmlFor={props.id}></label> 
                    </div>
                </div>
                {props.title || ''}
            </div>
        </>
    )
}
