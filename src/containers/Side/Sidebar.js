import Sidebar from '../../components/Side/Sidebar';
import { connect } from 'react-redux';
import { selectedId, changeQuery, clearQuery } from '../../actions';

const mapDispatchToProps = dispatch => ({

    onSelectedId(id) {
        dispatch(
            selectedId(id)
        )
    },
    
    onChangeQuery(query) {
        dispatch(
            changeQuery(query)
        )
    },

    onClearQuery() {
        dispatch(
            clearQuery()
        )
    }

})

export default connect(null, mapDispatchToProps)(Sidebar);