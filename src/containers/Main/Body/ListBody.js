import ListBody from '../../../components/Main/Body/ListBody';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    query: state.query
})

export default connect(mapStateToProps)(ListBody);