import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    tasks: state.tasks
})

export default connect(mapStateToProps)(TitleRow);