import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';
import { setList } from '../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current.list["id"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onSetList(id, title) {
        dispatch(
            setList(id, title)
        )
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(TitleRow);