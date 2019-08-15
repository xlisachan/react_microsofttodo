import ListItem from '../../../components/Main/Body/ListItem';
import { connect } from 'react-redux';
import { openMore, toggleCompleted, toggleImportant, setTaskId, setTask } from '../../../actions'; 

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current["listId"],
    selectedTaskId: state.current["taskId"]
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

    onSetTask(id, task) {
        dispatch(
            setTaskId(id)
        )

        dispatch(
            setTask(task)
        )

        dispatch(
            openMore()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);