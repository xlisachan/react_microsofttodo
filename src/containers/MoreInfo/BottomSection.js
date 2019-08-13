import BottomSection from '../../components/MoreInfo/BottomSection';
import { connect } from 'react-redux';
import { closeMore } from '../../actions';

const mapDispatchToProps = dispatch => ({

    onCloseMore() {
        dispatch(
            closeMore()
        )
    }
    
})

export default connect(null, mapDispatchToProps)(BottomSection);