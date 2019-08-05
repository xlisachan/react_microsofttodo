import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';
import { selectedListId, setPlaceholder, selectedTaskId } from '../../actions';

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
            selectedTaskId('')
        )
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(TitleRow);