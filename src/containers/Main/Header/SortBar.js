import SortBar from '../../../components/Main/Header/SortBar';
import { connect } from 'react-redux';
import { changeDir, changeOrder, resetChangeDir } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
})

const mapDispatchToProps = dispatch => ({
    
    onChangeDir(id) {
        dispatch(
            changeDir(id)
        )
    },

    onClear(id) {
        dispatch(
            changeOrder('date_created', id)
        )

        dispatch(
            resetChangeDir(id)
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);