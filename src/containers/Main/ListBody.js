import ListBody from '../../components/Main/ListBody';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    tasks: state.tasks
})

export default connect(mapStateToProps)(ListBody);