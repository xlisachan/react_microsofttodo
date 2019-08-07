import Main from '../../components/Main/Main';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.selectedListId,
    tasks: state.tasks
})

export default connect(mapStateToProps, null, null, {forwardRef: true})(Main);