import Sidebar from '../../components/Side/Sidebar';
import { connect } from 'react-redux';
import { getListTitle, changeQuery, clearQuery } from '../../actions';

const mapDispatchToProps = dispatch => ({

    getListTitle(title) {
        dispatch(
            getListTitle(title)
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