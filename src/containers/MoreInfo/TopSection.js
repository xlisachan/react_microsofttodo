import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { setTask, toggleCompleted, toggleImportant, updateTask } from '../../actions'; 

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
    },

    onUpdateTask(id, task) {
        dispatch(
            setTask(task)
        )

        dispatch(
            updateTask(id, task)
        )
    }

})

export default connect(null, mapDispatchToProps)(TopSection);