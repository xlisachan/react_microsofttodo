import React, { useState } from 'react';
import { ListItem } from '@material-ui/core';
import PlannedButton from '../../../containers/MoreInfo/Planned/PlannedButton';
import PlannedMenu from '../../../containers/MoreInfo/Planned/PlannedMenu';

const Planned = () => {
    const [anchorEl, setAnchorEl] = useState(null);


    const handleButtonClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <ListItem style={{margin: '10px 3px'}}>
            <PlannedButton onClick={ handleButtonClick } />

            <PlannedMenu
                open={ Boolean(anchorEl) }
                onClose={ handleMenuClose }
                anchorEl={ anchorEl }
            />
        </ListItem>
    );
}
 
export default Planned;