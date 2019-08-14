import AddItem from '../components/AddItem';
import { connect } from 'react-redux';
import { addStep, addTask, openMore } from '../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.selectedListId,
    selectedTaskId: state.selectedTaskId
})

const mapDispatchToProps = dispatch => ({

    onAddTask({
            task_id, item, date_completed, date_created, date_due,
            completedStatus, importantStatus, my_day, planned, important, tasks, list_id, steps
        }) {
        dispatch(
            addTask(
                task_id, item, date_completed, date_created, date_due, 
                completedStatus, importantStatus, my_day, planned, important, tasks, list_id, steps
            )
        )
    },

    onAddStep({completedStatus, id, step, task_id}) {
        dispatch(
            addStep(completedStatus, id, step, task_id)
        )

        dispatch(
            openMore()
        )
    }


})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);