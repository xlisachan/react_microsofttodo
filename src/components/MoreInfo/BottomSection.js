import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

const BottomSection = ({onCloseMore=f=>f}) => {
    const bottomStyle = () => {
        return {
            width: '95%',
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            bottom: 10
        }
    }  

    return (
        <ListItem style={ bottomStyle() }>
            <FaChevronRight onClick={()=> onCloseMore()} />
        </ListItem>
    );
}

BottomSection.propTypes = {
    onCloseMore: PropTypes.func.isRequired
}
 
export default BottomSection;