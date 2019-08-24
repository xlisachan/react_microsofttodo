import PlannedMenu from '../../../components/MoreInfo/Planned/PlannedMenu';
import { connect } from 'react-redux';
import { addDateDue } from '../../../actions';

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onAddDateDue(id, date) {
        dispatch(
            addDateDue(id, date)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(PlannedMenu);