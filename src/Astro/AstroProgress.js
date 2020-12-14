import React from 'react';
/* eslint-disable no-unused-vars */
import { RuxProgress } from '@astrouxds/rux-progress/rux-progress.js';
/* eslint-enable no-unused-vars */


export default function AstroButton(props) {

    return (
        <div><rux-progress {...props}></rux-progress></div>
    )
}