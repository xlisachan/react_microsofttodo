import ListItem from '../../components/Main/ListItem';
import { connect } from 'react-redux';
import { toggleCompleted, toggleImportant, toggleMoreInfo } from '../../actions'; 

const mapStateToProps = state => ({
    tasks: state.tasks,
    listTitle: state.listTitle,
    moreInfo: state.moreInfo
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

    onToggleMoreInfo(task) {
        dispatch(
            toggleMoreInfo(task)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);