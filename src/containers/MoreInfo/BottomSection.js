import BottomSection from '../../components/MoreInfo/BottomSection';
import { connect } from 'react-redux';
import { removeTask } from '../../actions';

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);