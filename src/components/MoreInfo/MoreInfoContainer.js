import MoreInfo from './MoreInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentTask: state.current.task,
    tasks: state.tasks
})

export default connect(mapStateToProps)(MoreInfo);