import ListItem from '../../../components/Main/Body/ListItem';
import { connect } from 'react-redux';
import { setTaskId, setTask, setSteps, toggleCompleted, toggleImportant } from '../../../actions'; 

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"],
    selectedTaskId: state.current.task["id"]
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

    onSetTask(id, task, steps) {
        dispatch(
            setTaskId(id)
        )

        dispatch(
            setTask(task)
        )

        dispatch(
            setSteps(steps)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);