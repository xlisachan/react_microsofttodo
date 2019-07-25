import SortBar from '../../../components/Main/Header/SortBar';
import { connect } from 'react-redux';
import { changeDir, changeOrder, resetChangeDir } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    listTitle: state.listTitle
})

const mapDispatchToProps = dispatch => ({
    
    onChangeDir(listTitle) {
        dispatch(
            changeDir(listTitle)
        )
    },

    onClear(listTitle) {
        dispatch(
            changeOrder('date_created', listTitle)
        )

        dispatch(
            resetChangeDir(listTitle)
        )
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);