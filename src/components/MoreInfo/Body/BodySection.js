import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Steps from './Sections/Steps/StepsContainer';
import MoreMyDay from './Sections/MyDay';
import MorePlanned from './Sections/Planned/MorePlanned';
import Note from './Sections/Note';

const BodySection = ({selectedTask, tasks, onClose}) => (
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

BodySection.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
};

export default BodySection;