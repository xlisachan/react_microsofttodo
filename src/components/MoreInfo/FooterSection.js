import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import DeleteModal from '../DeleteModal';

const FooterSection = ({renderDate, selectedTask, onClose=f=>f, onRemove=f=>f}) => {
    return (
        <div className="more-fixed more-margins more-footer">
            <FaChevronRight onClick={onClose} />

            { selectedTask[0].completedStatus ?  renderDate.completed : renderDate.created }

            <DeleteModal 
                id={ selectedTask[0].task_id }
                location= { 'more-bottom' }
                name={ selectedTask[0].item }
                todo={ 'task' }
                onClick={() => onRemove(selectedTask[0].task_id)}
            />
        </div>
    );
}

FooterSection.propTypes = {
    renderDate: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}
 
export default FooterSection;