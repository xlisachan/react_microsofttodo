import AddList from '../../components/Side/AddList';
import { connect } from 'react-redux';
import { addList, setList, setListId } from '../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
})

const mapDispatchToProps = dispatch => ({
    
    onAddList({id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList}) {
        dispatch(
            addList(id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList)
        )

        dispatch(
            setListId(id)
        )

        dispatch(
            setList(name)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AddList);