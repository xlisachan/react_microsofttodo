import Header from '../../components/Main/Header';
import { connect } from 'react-redux';
import { getDate, getHeaderDate } from '../../getDate';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    todaysDate: getHeaderDate(getDate())
})

export default connect(mapStateToProps)(Header);