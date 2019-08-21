import HeaderMenu from '../../../components/Main/Header/HeaderMenu';
import { connect } from 'react-redux';
import { changeBgColor, changeOrder, toggleHide } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
})

const mapDispatchToProps = dispatch => ({

    onChangeBgColor(color, id) {
        dispatch(
            changeBgColor(color, id)
        )
    },

    onChangeOrder(order, id) {
        dispatch(
            changeOrder(order, id)
        )
    },

    onToggleHide(id) {
        dispatch(
            toggleHide(id)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);