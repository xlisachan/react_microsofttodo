import HeaderMenu from '../../../components/Main/Header/HeaderMenu';
import { connect } from 'react-redux';
import { changeOrder } from '../../../actions';

const mapStateToProps = state => ({
    listTitle: state.listTitle
})

const mapDispatchToProps = dispatch => ({

    onChangeOrder(order, listTitle) {
        dispatch(
            changeOrder(order, listTitle)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);