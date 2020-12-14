import React from 'react';
/* eslint-disable no-unused-vars */
import { RuxButton } from '@astrouxds/rux-button/rux-button.js';
/* eslint-enable no-unused-vars */

export default function AstroButton(props) {
    
    return (
        <rux-button {...props}>{props.title}</rux-button>
    )
}
