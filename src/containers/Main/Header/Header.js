import Header from '../../../components/Main/Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.selectedListId
})

export default connect(mapStateToProps)(Header);