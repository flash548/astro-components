import React from 'react';
/* eslint-disable no-unused-vars */
import { RuxButton } from '@astrouxds/rux-button/rux-button.js';
import { RuxModal } from '@astrouxds/rux-modal/rux-modal.js';
/* eslint-disable no-unused-vars */

export default function AstroDialog(props) {

    return (
        <div className="rux-modal-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
  
            display: props.show ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 11001,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}>
            <div className="rux-modal" style={{height: 'auto', width: 'auto'}} role="dialog">
            <header className="rux-modal__titlebar">
                <h1>{props.title}</h1>
            </header>
            <div className="rux-modal__content">
                <div className="rux-modal__message">
                    {props.children}
                </div>
                <div className="rux-button-group" style={{marginTop: 'auto', marginLeft: 'auto', alignSelf: 'flex-end'}}>
                <rux-button
                    style={{marginRight: '0.375rem'}}
                    outline="true"
                    onClick={props.onCancel}
                    data-value="false"
                    tabindex="-1"
                >
                    {props.cancelText}
                </rux-button>
                <rux-button
                    onClick={props.onConfirm}
                    data-value="true"               
                    tabindex="0"
                >
                    {props.confirmText}
                </rux-button>
                </div>
            </div>
            </div>
        </div>
    )
}