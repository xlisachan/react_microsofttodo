import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';

const HeaderSection = ({currentTask, renderStatus, selectedTask, onEnterPress=f=>f, onSetTask=f=>f, onSubmit=f=>f}) => {
    return (
        <div className="more-margins more-header">
            <div style={{display: 'flex'}}>
                <span>
                    { selectedTask[0].completedStatus ?  renderStatus.completed : renderStatus.notCompleted }
                </span>

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

            <span>
                { selectedTask[0].importantStatus ? renderStatus.important : renderStatus.notImportant }
            </span>
        </div>
    );
}

HeaderSection.propTypes = {
    currentTask: PropTypes.object.isRequired,
    renderStatus: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
    onEnterPress: PropTypes.func.isRequired,
    onSetTask: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default HeaderSection;