import React from 'react';
import { makeStyles } from 'tss-react/mui';
import cn from 'classnames';

import { withPixelLineHeight } from '../../../base/styles/functions.web';
import { IDisplayProps } from '../ConferenceTimer';

const useStyles = makeStyles()(theme => {
    return {
        timer: {
            ...withPixelLineHeight(theme.typography.labelRegular),
            color: theme.palette.text01,
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '28px',
            borderRadius: `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
            marginRight: '2px',

            '@media (max-width: 300px)': {
                display: 'none'
            }
        }
    };
});

/**
 * Returns web element to be rendered.
 *
 * @returns {ReactElement}
 */
export default function ConferenceTimerDisplay({ timerValue, textStyle: _textStyle }: IDisplayProps) {
    const { classes } = useStyles();

    return (
        <span className = { cn(classes.timer, 'toolbox-timer', )}>{ timerValue }</span>
    );
}
