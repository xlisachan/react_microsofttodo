import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import { ClickAwayListener, ListItem } from '@material-ui/core';

const Note = ({currentNote, selectedTask, onClick=f=>f, onClickAway=f=>f, onSetNote=f=>f}) => {
    const placeholder = () => {
        if (!currentNote) currentNote = "";
        return (
            <Textarea
                placeholder={'Add a Note'}
                value={ currentNote }
                onChange={e => onSetNote(selectedTask[0].task_id, e.target.value)}
            />
        );
    }

    const note = () => {
        if (!currentNote) currentNote = "";
        return (
            <Textarea
                value={ currentNote }
                onChange={e => onSetNote(selectedTask[0].task_id, e.target.value)}
            />
        )
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <ListItem style={{margin: '10px 3px'}} onClick={onClick}>
                { selectedTask[0].note ? note() : placeholder() }
            </ListItem>
        </ClickAwayListener>
    );
};

Note.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickAway: PropTypes.func.isRequired
};

export default Note;