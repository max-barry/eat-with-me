import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Spring, config as SpringConfig } from 'react-spring';
import SvgBase from 'react-icon-base';

import { COLORS } from '../../../styles/constants.colors';
import { IconBaseStyle } from '../Icon.styles.js';

const LISTADD_DELTA_MAGNITUDE = 15;

const ListAdd = ({ active, initial, ...props }) => (
    <Spring
        config={SpringConfig.stiff}
        immediate={initial}
        to={{
            // delta: active ? 0 : LISTADD_DELTA_MAGNITUDE,
            progress: active ? 0 : 1
        }}
        children={({ delta, progress }) => (
            <SvgBase
                viewBox="0 0 40 40"
                className={css(IconBaseStyle, {
                    path: {
                        willChange: 'transform, opacity'
                    }
                })}
                {...this.props}
            >
                <g>
                    <path
                        className={css({
                            color: COLORS.valid,
                            opacity: 1 - progress,
                            transform: `translateY(${15 * progress}px)`
                        })}
                        d="M34.29,17.52l2.38,2.38L25.52,31.14,18.29,24l2.38-2.38,4.85,4.76Z"
                    />
                    <path
                        className={css({
                            transformOrigin: 'center',
                            opacity: progress,
                            transform: `scale(${progress})`
                        })}
                        d="M28.67,21.62H35v3.05H28.67v6.47H25.43V24.67H19.14V21.62h6.29V15.14h3.24Z"
                    />
                    <path d="M3.33,24.67V21.62H15.9v3.05Zm19-15.81V12.1h-19V8.86Zm0,6.28v3.24h-19V15.14Z" />
                </g>
            </SvgBase>
        )}
    />
);

// class ListAdd extends Component {
//     state = {
//         active: this.props.active || false,
//         initial: this.props.active || false
//     };

//     componentWillReceiveProps = nextProps => {
//         if (nextProps.active !== this.state.active)
//             this.setState(state => ({ active: nextProps.active }));
//     };

//     render() {
//         const { active, initial } = this.state;
//         const DELTA_MAGNITUDE = 15;

//         return (

//         );
//     }
// }

export default ListAdd;