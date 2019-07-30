import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedId: state.selectedId,
    tasks: state.tasks
})

export default connect(mapStateToProps)(TitleRow);