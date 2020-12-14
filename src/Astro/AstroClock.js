import React from 'react';
/* eslint-disable no-unused-vars */
import { RuxClock } from '@astrouxds/rux-clock/rux-clock.js';
/* eslint-enable no-unused-vars */

export default function AstroClock(props) {
    
    return (
        <rux-clock {...props}></rux-clock>
    )
}
