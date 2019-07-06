import RightClickMenu from '../../components/Main/RightClickMenu';
import { connect } from 'react-redux';
import { toggleCompleted, toggleImportant, removeTask } from '../../actions'; 

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
    
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }

})

export default connect(null, mapDispatchToProps)(RightClickMenu);