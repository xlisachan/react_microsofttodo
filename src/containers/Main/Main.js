import Main from '../../components/Main/Main';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedId: state.selectedId,
    tasks: state.tasks
})

export default connect(mapStateToProps)(Main);