import React from 'react';
import { compose, setPropTypes } from 'recompose';
import Headroom from 'react-headroom';
import PropTypes from 'prop-types';
import {
    BottomBarList as List,
    BottomBarInterior as Interior,
    headroomClass
} from './BottomBar.styles';
import { ButtonIcon } from '../Buttons';

const BottomBar = ({ items, ...props }) => (
    <List {...props}>
        <Interior>
            {items.map(({ label, icon, onClick, ...props }, key) => (
                <ButtonIcon
                    icon={icon}
                    onClick={onClick}
                    key={`bottom_bar_item_${key}`}
                >
                    {label}
                </ButtonIcon>
            ))}
        </Interior>
    </List>
);

const enhance = compose(
    setPropTypes({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                icon: PropTypes.string.isRequired,
                onClick: PropTypes.func.isRequired
            })
        ).isRequired
    })
);

export default enhance(BottomBar);