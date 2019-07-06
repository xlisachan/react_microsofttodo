import AddItem from '../../components/Main/AddItem';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

const mapStateToProps = state => ({
    listTitle: state.listTitle
})

const mapDispatchToProps = dispatch => ({

    onAddTask({
            task_id, item, list, completedStatus, importantStatus, moreInfo,
            date_created_full, date_created, date_due, my_day, planned, important, tasks
        }) {
        dispatch(
            addTask(
                task_id, item, list, completedStatus, importantStatus, moreInfo,
                date_created_full, date_created, date_due, my_day, planned, important, tasks
            )
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);