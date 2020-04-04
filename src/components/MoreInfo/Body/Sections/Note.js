import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ClickAwayListener, ListItem } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import { setNote } from '../../../../actions/currentActions';
import { updateNote } from '../../../../actions/tasksActions';

const Note = ({currentNote, selectedTask, onSetNote=f=>f, onUpdateNote=f=>f}) => {
    const [open, setOpen] = React.useState(false);

    if (!selectedTask[0]) return null;
    if (!currentNote) currentNote = "";

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const handleClickAway = () => {
        if (open) {
            onUpdateNote(selectedTask[0].task_id, currentNote);
        }
        setOpen(false);
    };

    const placeholder = 
        <Textarea
            placeholder={'Add a Note'}
            value={ currentNote }
            onChange={e => onSetNote(selectedTask[0].task_id, e.target.value)}
        />

    const note = 
        <Textarea
            value={ currentNote }
            onChange={e => onSetNote(selectedTask[0].task_id, e.target.value)}
        />

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <ListItem style={{margin: '10px 3px'}} onClick={handleClick}>
                { selectedTask[0].note ? note : placeholder }
            </ListItem>
        </ClickAwayListener>
    );
};

Note.propTypes = {
    currentNote: PropTypes.string,
    selectedTask: PropTypes.array,
    onSetNote: PropTypes.func.isRequired,
    onUpdateNote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentNote: state.current.note,
});

const mapDispatchToProps = dispatch => ({
    onSetNote(id, note) {
        dispatch(
            setNote(id, note)
        )
    },

    onUpdateNote(id, note) {
        dispatch(
            updateNote(id, note)
        )
    }
});

export default (connect)(mapStateToProps, mapDispatchToProps)(Note);