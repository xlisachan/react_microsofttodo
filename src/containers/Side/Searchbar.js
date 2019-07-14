import Searchbar from '../../components/Side/Searchbar';
import { connect } from 'react-redux';
import { changeQuery, clearQuery } from '../../actions';

const mapDispatchToProps = dispatch => ({

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

export default connect(null, mapDispatchToProps)(Searchbar);