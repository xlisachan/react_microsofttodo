import HeaderName from '../../../components/Main/Header/HeaderName';
import { connect } from 'react-redux';
import { editTitle, renameList, setList, submitTitle, clearItem } from '../../../actions';

const mapStateToProps = state => ({
    lists: state.lists,
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
    },

    onRenameList(id, name) {
        dispatch(
            setList(name)
        )

        dispatch(
            renameList(id, name)
        )

        dispatch(
            submitTitle()
        )

        dispatch(
            clearItem()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(HeaderName);