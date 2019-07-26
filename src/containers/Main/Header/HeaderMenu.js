import HeaderMenu from '../../../components/Main/Header/HeaderMenu';
import { connect } from 'react-redux';
import { changeBgColor, changeOrder, toggleHide } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    listTitle: state.listTitle
})

const mapDispatchToProps = dispatch => ({

    onChangeBgColor(color, listTitle) {
        dispatch(
            changeBgColor(color, listTitle)
        )
    },

    onChangeOrder(order, listTitle) {
        dispatch(
            changeOrder(order, listTitle)
        )
    },

    onToggleHide(listTitle) {
        dispatch(
            toggleHide(listTitle)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);