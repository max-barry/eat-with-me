import React from 'react';
import PropTypes from 'prop-types';
import { animated, Spring, config } from 'react-spring';
import { compose, setPropTypes, lifecycle, onlyUpdateForKeys } from 'recompose';
import { sInteractive } from '../../../settings/styles';
import {
    addedItemContainerClass as itemContainerClass,
    addedItemTitleClass as itemTitleClass,
    addedItemStrapClass as itemStrapClass,
    addedItemDeckClass as itemDeckClass,
    addedItemButtonClass as itemButtonClass
} from './Added.styles';

const enhanceCompactCard = compose(
    setPropTypes({
        title: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        deck: PropTypes.string,
        strap: PropTypes.string,
        isExpanded: PropTypes.bool
    }),
    onlyUpdateForKeys(['isExpanded', 'style']),
    lifecycle({
        componentDidUpdate() {
            if (this.props.onDidUpdate) this.props.onDidUpdate();
        }
    })
);

export const AddedItem = enhanceCompactCard(
    ({
        id,
        atRest,
        title,
        deck,
        strap,
        onClick,
        onExpandedAction,
        onDidUpdate,
        isExpanded,
        ...props
    }) => {
        return (
            <animated.div className={itemContainerClass} {...props}>
                <div
                    className={sInteractive}
                    onClick={() => onClick(atRest, id)}
                >
                    <h3 className={itemTitleClass(props)}>{title}</h3>
                    {strap && <h4 className={itemStrapClass}>{strap}</h4>}
                    {deck && <p className={itemDeckClass}>{deck}</p>}
                </div>
                <Spring
                    native
                    from={{ opacity: 0 }}
                    to={{ opacity: isExpanded ? 1 : 0 }}
                    config={config.stiff}
                >
                    {actionStyles => (
                        <animated.button
                            className={itemButtonClass}
                            style={actionStyles}
                            onClick={() => onExpandedAction(id)}
                        >
                            Button
                        </animated.button>
                    )}
                </Spring>
            </animated.div>
        );
    }
);
