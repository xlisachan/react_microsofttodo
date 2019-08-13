import BottomSection from '../../components/MoreInfo/BottomSection';
import { connect } from 'react-redux';
import { closeMore } from '../../actions';

const mapStateToProps = state => ({
    selectedTaskId: state.selectedTaskId,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onCloseMore() {
        dispatch(
            closeMore()
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);