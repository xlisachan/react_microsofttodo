import MoreMyDay from '../../../components/MoreInfo/MyDay/MoreMyDay';
import { connect } from 'react-redux';
import { toggleMyDay } from '../../../actions';

const mapStateToProps = state => ({
    currentList: state.current.list["title"],
})

const mapDispatchToProps = dispatch => ({
    
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MoreMyDay);