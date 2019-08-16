import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { connect } from 'react-redux';
import { clearItem, renameList, submitTitle, setList, setTask, updateTask } from '../actions';

const mapStateToProps = state => ({
    currentTask: state.current["taskItem"],
    item: state.current["item"],
    lists: state.lists,
    open: state.open,
    placeholder: state.current["listTitle"],
    selectedListId: state.current["listId"],
    selectedTaskId: state.current["taskId"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onRenameList(id, name) {
        dispatch(
            setList(name)
        )

        dispatch(
            renameList(id, name)
        )

        dispatch(
            submitTitle()
        )

        dispatch(
            clearItem()
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);