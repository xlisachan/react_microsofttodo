import Header from '../../../components/Main/Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    listTitle: state.listTitle
})

export default connect(mapStateToProps)(Header);