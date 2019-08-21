import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { clearItem, editTitle, setTask, submitTitle, toggleCompleted, toggleImportant, updateTask } from '../../actions'; 

const mapStateToProps = state => ({
    currentTask: state.current.task,
    tasks: state.tasks
})

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

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);