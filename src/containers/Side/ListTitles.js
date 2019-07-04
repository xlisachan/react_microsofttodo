import ListTitles from '../../components/Side/ListTitles';
import { connect } from 'react-redux';
import { getListTitle } from '../../actions';

const mapStateToProps = state => ({
    listTitle: state.listTitle,
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    getListTitle(title) {
        dispatch(
            getListTitle(title)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListTitles);