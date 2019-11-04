import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Steps from './Steps/StepsContainer';
import MoreMyDay from './MyDay/MoreMyDayContainer';
import MorePlanned from './Planned/MorePlanned';
import Note from './Note/NoteContainer';

const BodySection = ({selectedTask, tasks, onClose}) => {
    return (
        <div style={{height: '82vh', overflow: 'auto'}}>
            <Steps selectedTask={ selectedTask } />

            <Divider />

            <MoreMyDay selectedTask={ selectedTask } onClose={ onClose } />

            <Divider />

            <MorePlanned selectedTask={ selectedTask } tasks={ tasks } />

            <Divider />

            <Note selectedTask={ selectedTask } />
        </div>
    );
};

BodySection.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
};

export default BodySection;