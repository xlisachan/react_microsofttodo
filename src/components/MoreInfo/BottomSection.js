import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';
import DeleteModal from '../DeleteModal';

const BottomSection = ({bottomStyle, renderDate, selectedTask, onClose=f=>f, onRemove=f=>f}) => {
    return (
        <ListItem style={ bottomStyle() }>
            <FaChevronRight onClick={onClose} />

            { selectedTask[0].completedStatus ?  renderDate.completed : renderDate.created }

            <DeleteModal 
                id={ selectedTask[0].task_id }
                location= { 'more-bottom' }
                name={ selectedTask[0].item }
                todo={ 'task' }
                onClick={() => onRemove(selectedTask[0].task_id)}
            />
        </ListItem>
    );
}

BottomSection.propTypes = {
    renderDate: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
    bottomStyle: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}
 
export default BottomSection;