import AddItem from '../components/AddItem';
import { connect } from 'react-redux';
import { addStep, addTask } from '../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"],
    selectedTaskId: state.current.task["id"]
})

const mapDispatchToProps = dispatch => ({

    onAddTask({
            task_id, item, date_completed, date_created, date_due,
            completedStatus, importantStatus, my_day, planned, important, tasks, list_id, note, steps
        }) {
        dispatch(
            addTask(
                task_id, item, date_completed, date_created, date_due, 
                completedStatus, importantStatus, my_day, planned, important, tasks, list_id, note, steps
            )
        )
    },

    onAddStep({completedStatus, id, step, task_id}) {
        dispatch(
            addStep(completedStatus, id, step, task_id)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);