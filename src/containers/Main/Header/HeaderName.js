import HeaderName from '../../../components/Main/Header/HeaderName';
import { connect } from 'react-redux';
import { editTitle, setList } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    open: state.open,
    placeholder: state.current["listTitle"],
    selectedListId: state.current["listId"],
})

const mapDispatchToProps = dispatch => ({
    
    onSetList(title) {
        dispatch(
            setList(title)
        )

        dispatch(
            editTitle()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(HeaderName);