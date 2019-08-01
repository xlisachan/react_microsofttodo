import ListItem from '../../../components/Main/Body/ListItem';
import { connect } from 'react-redux';
import { toggleCompleted, toggleImportant } from '../../../actions'; 

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.selectedListId
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
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);