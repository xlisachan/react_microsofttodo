import Sidebar from '../../components/Side/Sidebar';
import { connect } from 'react-redux';
import { changeQuery, clearQuery } from '../../actions';

const mapStateToProps = state => ({
    query: state.query
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);