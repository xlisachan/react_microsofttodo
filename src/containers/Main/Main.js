import Main from '../../components/Main/Main';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    query: state.query,
    tasks: state.tasks,
    listTitle: state.listTitle,
    orderBy: state.orderBy,
    orderDir: state.orderDir
})

export default connect(mapStateToProps)(Main);