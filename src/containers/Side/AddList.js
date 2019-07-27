import AddList from '../../components/Side/AddList';
import { connect } from 'react-redux';
import { addList } from '../../actions';

const mapDispatchToProps = dispatch => ({
    
    onAddList({id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList}) {
        dispatch(
            addList(id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList)
        )
    }

})

export default connect(null, mapDispatchToProps)(AddList);