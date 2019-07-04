import Header from '../../components/Main/Header';
import { connect } from 'react-redux';
import getDate from '../../getDate';

const getHeaderDate = date => {
    return date.weekday + ', ' + date.month + ' ' + date.day ;
}

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    todaysDate: getHeaderDate(getDate())
})

export default connect(mapStateToProps)(Header);