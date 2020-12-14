import React from 'react';
import { RuxNotification } from '@astrouxds/rux-notification/rux-notification.js';

export default function AstroNotification(props) {

    
    if (props.open) {
        setTimeout(props.close, props.timeout);

        return (
            <rux-notification {...props}></rux-notification>
        )
    }
    else {
        return null;
    }
}