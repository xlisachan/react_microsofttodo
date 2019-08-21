import HeaderName from '../../../components/Main/Header/HeaderName';
import { connect } from 'react-redux';
import { editTitle, renameList, setList, submitTitle, clearItem } from '../../../actions';

const mapStateToProps = state => ({
    currentList: state.current.list,
    lists: state.lists
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