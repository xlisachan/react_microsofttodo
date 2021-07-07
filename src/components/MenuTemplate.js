import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@material-ui/core';

const MenuTemplate = ({anchorEl, menuArr, open, onClose=f=>f, renderMenuItems=f=>f}) => (
    <Menu
        open={ open }
        onClose={ onClose }
        anchorEl={ anchorEl }>

        { renderMenuItems(menuArr) }
    </Menu>
);

MenuTemplate.propTypes = {
    anchorElement: PropTypes.any,
    menuArr: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    renderMenuItems: PropTypes.func.isRequired
};

export default MenuTemplate;