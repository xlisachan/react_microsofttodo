import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';
import PlannedButton from '../../../containers/MoreInfo/Planned/PlannedButton';
import PlannedMenu from '../../../containers/MoreInfo/Planned/PlannedMenu';

const Planned = ({selectedTask, tasks}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    if (!selectedTask[0]) return null;

    const handleButtonClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <ListItem style={{margin: '10px 3px'}}>
            <PlannedButton selectedTask={ selectedTask } onClick={ handleButtonClick } />

            <PlannedMenu
                open={ Boolean(anchorEl) }
                onClose={ handleMenuClose }
                anchorEl={ anchorEl }
                selectedTask={ selectedTask }
                tasks={ tasks }
            />
        </ListItem>
    );
}

Planned.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired
}

export default Planned;