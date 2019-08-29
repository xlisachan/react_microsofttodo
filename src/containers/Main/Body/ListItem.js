import ListItem from '../../../components/Main/Body/ListItem';
import { connect } from 'react-redux';
import { setTask, toggleCompleted, toggleImportant } from '../../../actions'; 

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

    onSetTask(id, task, steps, note) {

        dispatch(
            setTask(id, task, note, steps)
        )

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);