import ListBody from '../../components/Main/ListBody';
import { getDate, getCurrentDate } from '../../getDate';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    tasks: state.tasks.map(task =>
        task.my_day && task.date_created === getCurrentDate(getDate()) ?
            {
                ...task,
                my_day: true
            }
            :
            {
                ...task,
                my_day: false
            }
        )
})

export default connect(mapStateToProps)(ListBody);