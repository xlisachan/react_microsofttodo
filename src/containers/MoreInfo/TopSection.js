import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { clearItem, editTitle, setTask, submitTitle, toggleCompleted, toggleImportant, updateTask } from '../../actions'; 

const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },

    onSetTask(task) {
        dispatch(
            setTask(task)
        )

        dispatch(
            editTitle()
        )
    },

    onUpdateTask(id, task) {
        dispatch(
            setTask(task)
        )

        dispatch(
            updateTask(id, task)
        )

        dispatch(
            submitTitle()
        )

        dispatch(
            clearItem()
        )
    }

})

export default connect(null, mapDispatchToProps)(TopSection);