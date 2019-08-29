import Note from '../../../components/MoreInfo/Note/Note';
import { connect } from 'react-redux';
import { setNote, updateNote } from '../../../actions';

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

export default (connect)(mapStateToProps, mapDispatchToProps)(Note)