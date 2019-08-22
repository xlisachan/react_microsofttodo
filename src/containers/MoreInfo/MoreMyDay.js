import MoreMyDay from '../../components/MoreInfo/MoreMyDay';
import { connect } from 'react-redux';
import { toggleMyDay } from '../../actions';

const mapStateToProps = state => ({
    currentList: state.current.list["title"],
    currentTask: state.current.task,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoreMyDay);