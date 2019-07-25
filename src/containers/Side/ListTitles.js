import ListTitles from '../../components/Side/ListTitles';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    lists: state.lists,
    tasks: state.tasks
})

export default connect(mapStateToProps)(ListTitles);