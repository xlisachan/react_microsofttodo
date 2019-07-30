import AddItem from '../../../components/Main/Body/AddItem';
import { connect } from 'react-redux';
import { addTask } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedId: state.selectedId
})

const mapDispatchToProps = dispatch => ({

    onAddTask({
            task_id, item, date_created, date_due, date_due_display,
            completedStatus, importantStatus, my_day, planned, important, tasks, list_id
        }) {
        dispatch(
            addTask(
                task_id, item, date_created, date_due, date_due_display, 
                completedStatus, importantStatus, my_day, planned, important, tasks, list_id
            )
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);