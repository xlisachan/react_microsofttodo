import React from 'react';
import { connect } from 'react-redux';
import { setNote } from '../../../actions/currentActions';
import { updateNote } from '../../../actions/tasksActions';
import Textarea from 'react-textarea-autosize';
import Note from './Note';

const NoteContainer = ({currentNote, selectedTask, onSetNote=f=>f, onUpdateNote=f=>f}) => {
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

    const renderNote = {
        placeholder,
        note
    }

    return (
        <Note
            open={ open }
            renderNote={ renderNote }
            selectedTask={ selectedTask }
            onClick={ handleClick }
            onClickAway={ handleClickAway }
        />
    );
}

const mapStateToProps = state => ({
    currentNote: state.current.note,
})

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
    
})

export default (connect)(mapStateToProps, mapDispatchToProps)(NoteContainer)