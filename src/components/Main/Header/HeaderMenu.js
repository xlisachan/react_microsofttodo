import React from 'react';
import PropTypes from 'prop-types';
import todoMenu from './todoMenu';
import { Menu } from '@material-ui/core';

const HeaderMenu = ({anchorEl, open, onClose, renderMenuItems=f=>f}) => {
    return (
        <Menu
            open={ open }
            onClose={ onClose }
            anchorEl={ anchorEl }>

            { renderMenuItems(todoMenu) }
        </Menu>
    );
}

HeaderMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    renderMenuItems: PropTypes.func.isRequired
};

export default HeaderMenu;