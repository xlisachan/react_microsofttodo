import BottomSection from '../../components/MoreInfo/BottomSection';
import { connect } from 'react-redux';
import { removeTask } from '../../actions';

const mapDispatchToProps = dispatch => ({

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
    
})

export default connect(null, mapDispatchToProps)(BottomSection);