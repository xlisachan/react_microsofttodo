import RightClickMenuSide from '../../components/Side/RightClickMenuSide';
import { connect } from 'react-redux';
import { removeList, removeTask, selectedListId } from '../../actions';

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onRemoveList(id) {
        dispatch(
            removeList(id)
        )

        dispatch(
            selectedListId('0')
        )
    },

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(RightClickMenuSide);