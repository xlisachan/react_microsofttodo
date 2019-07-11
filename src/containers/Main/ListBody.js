import ListBody from '../../components/Main/ListBody';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
})

export default connect(mapStateToProps)(ListBody);