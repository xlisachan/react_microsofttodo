import TitleRow from '../../components/Side/TitleRow';
import { connect } from 'react-redux';
import { selectedListId } from '../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.selectedListId,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onSetSelectedListId(id) {
        dispatch(
            selectedListId(id)
        )
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(TitleRow);