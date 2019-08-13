import MoreInfoDrawer from '../../components/MoreInfo/MoreInfo';
import { connect } from 'react-redux';
import { closeMore } from '../../actions';

const mapStateToProps = state => ({
    toggleMore: state.toggleMore
})

const mapDispatchToProps = dispatch => ({

    onCloseMore() {
        dispatch(
            closeMore()
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoDrawer);