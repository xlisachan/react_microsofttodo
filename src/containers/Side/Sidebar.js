import Sidebar from '../../components/Side/Sidebar';
import { connect } from 'react-redux';
import { changeQuery, clearQuery } from '../../actions';

const mapDispatchToProps = dispatch => ({

    onChangeQuery(query) {
        dispatch(
            changeQuery(query)
        )
    },

    onClear() {
        dispatch(
            clearQuery()
        )
    }

})

export default connect(null, mapDispatchToProps)(Sidebar);