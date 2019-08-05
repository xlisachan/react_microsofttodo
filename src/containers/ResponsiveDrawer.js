import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { connect } from 'react-redux';
import { renameList, submitTitle, setPlaceholder } from '../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    open: state.open,
    placeholder: state.placeholder,
    selectedListId: state.selectedListId
})

const mapDispatchToProps = dispatch => ({

    onRenameList(id, name) {
        dispatch(
            setPlaceholder(name)
        )

        dispatch(
            renameList(id, name)
        )

        dispatch(
            submitTitle()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);