import AddList from '../../components/Side/AddList';
import { connect } from 'react-redux';
import { addList, setListNo } from '../../actions';

const mapStateToProps = state => ({
    listNo: state.listNo,
})

const mapDispatchToProps = dispatch => ({
    
    onAddList({id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList}) {
        dispatch(
            addList(id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList)
        )
    },

    onSetListNo(num) {
        dispatch(
            setListNo(num)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AddList);