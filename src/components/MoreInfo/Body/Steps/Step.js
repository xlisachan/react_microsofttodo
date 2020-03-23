import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import DeleteModal from '../../../common/DeleteModal';
import Completed from './Completed';

const Step = ({selectedTask, step, stepContainer=f=>f, stepStyle=f=>f, getPlaceholder=f=>f, onEnterPress=f=>f, onRemoveStep=f=>f, onSetStep=f=>f, onToggleStep=f=>f}) => {
    return (
        <ListItem key={`${step.step}_${step.id}`} style={ stepContainer(step.id) } onClick={() => onSetStep(step.id, step.step)}>
            <div className="align-center">
                <Completed selectedTask={selectedTask} step={step} onToggleStep={onToggleStep} />
                
                <Textarea
                    style={ stepStyle(step) }
                    type="text"
                    value={getPlaceholder(step)}
                    onChange={e => onSetStep(step.id, e.target.value)}
                    onKeyPress={e => onEnterPress(e)}
                />
            </div>

            <DeleteModal 
                id={ step.id }
                location={ 'more-top' }
                name={ step.step }
                todo={ 'step' }
                onClick={() => onRemoveStep(selectedTask[0].task_id, step.id)}
            />
        </ListItem>
    );
};

Step.propTypes = {
    selectedTask: PropTypes.array,
    step: PropTypes.object.isRequired,
    getPlaceholder: PropTypes.func.isRequired,
    onEnterPress: PropTypes.func.isRequired,
    onRemoveStep: PropTypes.func.isRequired,
    onSetStep: PropTypes.func.isRequired,
    stepContainer: PropTypes.func.isRequired,
    stepStyle: PropTypes.func.isRequired
};

export default Step;