import MoreInfo from '../../components/MoreInfo/MoreInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentTask: state.current.task,
    tasks: state.tasks
})

export default connect(mapStateToProps)(MoreInfo);