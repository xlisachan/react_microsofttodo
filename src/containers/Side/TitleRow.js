import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';
import { closeMore, selectedListId, setPlaceholder } from '../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.selectedListId,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onSetSelectedList(id, title) {
        dispatch(
            selectedListId(id)
        )

        dispatch(
            setPlaceholder(title)
        )

        dispatch(
            closeMore()
        )
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(TitleRow);