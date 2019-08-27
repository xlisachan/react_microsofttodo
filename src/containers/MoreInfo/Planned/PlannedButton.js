import PlannedButton from '../../../components/MoreInfo/Planned/PlannedButton';
import { connect } from 'react-redux';
import { removeDateDue } from '../../../actions';

const mapDispatchToProps = dispatch => ({

    onRemoveDateDue(id) {
        dispatch(
            removeDateDue(id)
        )
    }

})

export default connect(null, mapDispatchToProps)(PlannedButton);