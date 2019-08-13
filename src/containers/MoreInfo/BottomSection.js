import BottomSection from '../../components/MoreInfo/BottomSection';
import { connect } from 'react-redux';
import { closeMore, removeTask } from '../../actions';

const mapStateToProps = state => ({
    selectedTaskId: state.selectedTaskId,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onCloseMore() {
        dispatch(
            closeMore()
        )
    },

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);