import RightClickMenuSide from '../../components/Side/RightClickMenuSide';
import { connect } from 'react-redux';
import { removeList, removeTask, setList } from '../../actions';

const mapStateToProps = state => ({
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onRemoveList(id) {
        dispatch(
            removeList(id)
        )

        dispatch(
            setList('0', 'My Day')
        )
    },

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(RightClickMenuSide);