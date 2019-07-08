import ListTitles from '../../components/Side/ListTitles';
import { getDate, getCurrentDate } from '../../getDate';
import { connect } from 'react-redux';
import { getListTitle } from '../../actions';

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

const mapDispatchToProps = dispatch => ({
    
    getListTitle(title) {
        dispatch(
            getListTitle(title)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListTitles);