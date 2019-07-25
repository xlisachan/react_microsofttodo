import Main from '../../components/Main/Main';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    query: state.query,
    tasks: state.tasks,
    listTitle: state.listTitle,
    lists: state.lists
})

export default connect(mapStateToProps)(Main);