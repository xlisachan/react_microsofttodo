import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { openMore, toggleCompleted, toggleImportant } from '../../actions'; 

const mapStateToProps = state => ({
    selectedTaskId: state.selectedTaskId,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )

        dispatch(
            openMore()
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )

        dispatch(
            openMore()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);