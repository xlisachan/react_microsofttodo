import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import Completed from './Completed';
import DeleteModal from '../../DeleteModal';

const FooterSection = ({selectedTask, onClose=f=>f, onRemove=f=>f}) => (
    <div className="more-fixed more-margins more-footer">
        <FaChevronRight onClick={onClose} />

        <Completed selectedTask={selectedTask} />

        <DeleteModal 
            id={ selectedTask[0].task_id }
            location= { 'more-bottom' }
            name={ selectedTask[0].item }
            todo={ 'task' }
            onClick={() => onRemove(selectedTask[0].task_id)}
        />
    </div>
);

FooterSection.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};
 
export default FooterSection;