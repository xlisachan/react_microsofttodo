import Header from '../../components/Main/Header';
import { connect } from 'react-redux';
import { getCurrentDateObj, headerFormat } from '../../getDate';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    todaysDate: headerFormat(getCurrentDateObj())
})

export default connect(mapStateToProps)(Header);