import PlannedButton from '../../../components/MoreInfo/Planned/PlannedButton';
import { connect } from 'react-redux';
import { removeDateDue } from '../../../actions';

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onRemoveDateDue(id) {
        dispatch(
            removeDateDue(id)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(PlannedButton);