import React from 'react';
/* eslint-disable no-unused-vars */
import { RuxGlobalStatusBar } from '@astrouxds/rux-global-status-bar/rux-global-status-bar.js';
/* eslint-enable no-unused-vars */

export default function AstroClock(props) {
    
    return (
        <rux-global-status-bar className="dark-theme" appname={props.title} style={{zIndex: 11000}}>
            {props.children}
        </rux-global-status-bar>
    )
}