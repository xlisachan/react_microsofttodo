import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNote } from '../../../../actions/currentActions';
import { updateNote } from '../../../../actions/tasksActions';
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

    return (
        <Note
            currentNote={ currentNote }
            selectedTask={ selectedTask }
            onClick={ handleClick }
            onClickAway={ handleClickAway }
            onSetNote={onSetNote}
        />
    );
};

NoteContainer.propTypes = {
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

export default (connect)(mapStateToProps, mapDispatchToProps)(NoteContainer)