import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { FaRegEdit } from 'react-icons/fa';
import TitleRow from './TitleRowContainer';
import DeleteModal from '../../DeleteModal';

const RightClickMenuSide = ({list, onClick=f=>f, onClose=f=>f, onEditClick=f=>f, onRemove=f=>f}) => (
    <React.Fragment>
        <ContextMenuTrigger id={list.id}>
            <TitleRow
                list={ list }
                onClick={ onClick }
                onClose={ onClose }
            />
        </ContextMenuTrigger>

        <ContextMenu id={list.id}>
            <MenuItem onClick={ onEditClick }>
                <FaRegEdit className="list-icon" style={{margin: '0 5px 3px 0'}} />
                <span>Rename list</span>
            </MenuItem>

            <MenuItem>
                <DeleteModal
                    id={ list.id }
                    location={ 'side-rightclick' }
                    name={ list.name }
                    todo={ 'list'}
                    onClick={ onRemove }
                />
            </MenuItem>
        </ContextMenu>
    </React.Fragment>
);

RightClickMenuSide.propTypes = {
    list: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default RightClickMenuSide;