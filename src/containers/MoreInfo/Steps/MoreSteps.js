import MoreSteps from '../../../components/MoreInfo/Steps/MoreSteps';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"],
    tasks: state.tasks
})

export default connect(mapStateToProps)(MoreSteps);