import Header from '../../../components/Main/Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedId: state.selectedId
})

export default connect(mapStateToProps)(Header);