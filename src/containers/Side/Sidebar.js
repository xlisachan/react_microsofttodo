import Sidebar from '../../components/Side/Sidebar';
import { connect } from 'react-redux';
import { changeQuery, clearQuery, clearCurrentTask } from '../../actions';

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

        dispatch(
            clearCurrentTask()
        )
    }

})

export default connect(null, mapDispatchToProps)(Sidebar);