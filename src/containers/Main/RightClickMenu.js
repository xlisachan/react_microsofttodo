import RightClickMenu from '../../components/Main/RightClickMenu';
import { connect } from 'react-redux';
import { toggleMyDay, toggleCompleted, toggleImportant, removeTask } from '../../actions'; 

const mapDispatchToProps = dispatch => ({
    
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    },

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
    
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }

})

export default connect(null, mapDispatchToProps)(RightClickMenu);