import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import { ClickAwayListener, ListItem } from '@material-ui/core';

const Note = ({currentNote, selectedTask, onSetNote=f=>f, onUpdateNote=f=>f}) => {
    const [open, setOpen] = React.useState(false);

    if (!selectedTask[0]) return null;

    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const handleClickAway = () => {
        if (open) {
            onUpdateNote(selectedTask[0].task_id, currentNote);
        }
        
        setOpen(false);
    };

    const notePlaceholder = () =>
        <Textarea
            placeholder={'Add a Note'}
            value={ currentNote }
            onChange={e => onSetNote(e.target.value)}
        />

    const showNote = () =>
        <Textarea
            value={ currentNote }
            onChange={e => onSetNote(e.target.value)}
        />

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <ListItem style={{margin: '10px 3px'}} onClick={handleClick}>
                { open || selectedTask[0].note === "" ? notePlaceholder() : showNote() }
            </ListItem>
        </ClickAwayListener>
    );
}

Note.propTypes = {
    currentNote: PropTypes.string,
    selectedTask: PropTypes.array.isRequired,
    onSetNote: PropTypes.func.isRequired,
    onUpdateNote: PropTypes.func.isRequired
}
export default Note;