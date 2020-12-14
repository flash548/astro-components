import React from 'react';
/* eslint-disable no-unused-vars */
import { RuxMonitoringIcon } from '@astrouxds/rux-monitoring-icon/rux-monitoring-icon.js';
/* eslint-enable no-unused-vars */
import astroIcons from './astro.svg';

export default function AstroIcon(props) {
    return (
        <rux-monitoring-icon {...props} library={astroIcons}></rux-monitoring-icon>
    )
}