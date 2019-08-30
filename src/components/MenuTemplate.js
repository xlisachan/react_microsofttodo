import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@material-ui/core';

const MenuTemplate = ({anchorEl, menuArr, open, onClose, renderMenuItems=f=>f}) => {
    return (
        <Menu
            open={ open }
            onClose={ onClose }
            anchorEl={ anchorEl }>

            { renderMenuItems(menuArr) }
        </Menu>
    );
}

MenuTemplate.propTypes = {
    open: PropTypes.bool.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    menuArr: PropTypes.array.isRequired,
    renderMenuItems: PropTypes.func.isRequired
};

export default MenuTemplate;