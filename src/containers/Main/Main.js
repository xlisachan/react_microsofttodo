import Main from '../../components/Main/Main';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    query: state.query
})

export default connect(mapStateToProps)(Main);