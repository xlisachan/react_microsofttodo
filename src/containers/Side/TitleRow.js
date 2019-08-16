import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';
import { setListId, setList } from '../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current["listId"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onSetList(id, title) {
        dispatch(
            setListId(id)
        )

        dispatch(
            setList(title)
        )
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(TitleRow);