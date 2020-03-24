import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import Completed from './Status/Completed';
import Important from './Status/Important';

const HeaderSection = ({currentTask, selectedTask, onEnterPress=f=>f, onSetTask=f=>f, onSubmit=f=>f}) => (
    <div className="more-margins more-header">
        <div style={{display: 'flex'}}>
            <Completed selectedTask={selectedTask} />

            <form onSubmit={onSubmit}>
                <Textarea
                    type="text"
                    className="more-list-title"
                    value={ currentTask.task }
                    onChange={e => onSetTask(currentTask.id, e.target.value, selectedTask[0].note, selectedTask[0].steps)}
                    onKeyDown={e => onEnterPress(e)}
                />
            </form>
        </div>

        <Important selectedTask={selectedTask} />
    </div>
);

HeaderSection.propTypes = {
    currentTask: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
    onEnterPress: PropTypes.func.isRequired,
    onSetTask: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default HeaderSection;