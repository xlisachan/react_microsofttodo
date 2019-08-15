import Main from '../../components/Main/Main';
import { connect } from 'react-redux';
import { closeMore, openMore } from '../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current["listId"],
    tasks: state.tasks,
    toggleMore: state.toggleMore
})

const mapDispatchToProps = dispatch => ({

    onOpenMore() {
        dispatch(
            openMore()
        )
    },

    onCloseMore() {
        dispatch(
            closeMore()
        )
    }
})
export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Main);