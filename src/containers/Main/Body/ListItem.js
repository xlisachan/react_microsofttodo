import ListItem from '../../../components/Main/Body/ListItem';
import { connect } from 'react-redux';
import { openMore, toggleCompleted, toggleImportant, selectedTaskId } from '../../../actions'; 

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.selectedListId,
    selectedTaskId: state.selectedTaskId
})

const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },

    onSetSelectedTaskId(id) {
        dispatch(
            selectedTaskId(id)
        )

        dispatch(
            openMore()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);