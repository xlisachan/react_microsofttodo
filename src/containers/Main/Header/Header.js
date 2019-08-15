import Header from '../../../components/Main/Header/Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current["listId"]
})

export default connect(mapStateToProps, null, null, {forwardRef: true})(Header);