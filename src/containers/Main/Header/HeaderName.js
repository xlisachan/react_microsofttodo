import HeaderName from '../../../components/Main/Header/HeaderName';
import { connect } from 'react-redux';
import { editTitle, setPlaceholder } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    open: state.open,
    placeholder: state.placeholder,
    selectedListId: state.selectedListId,
})

const mapDispatchToProps = dispatch => ({
    
    onSetPlaceholder(name) {
        dispatch(
            setPlaceholder(name)
        )

        dispatch(
            editTitle()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderName);