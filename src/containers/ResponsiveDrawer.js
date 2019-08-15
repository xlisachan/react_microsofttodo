import ResponsiveDrawer from '../components/ResponsiveDrawer';
import { connect } from 'react-redux';
import { renameList, submitTitle, setList } from '../actions';

const mapStateToProps = state => ({
    lists: state.lists,
    open: state.open,
    placeholder: state.current["listTitle"],
    selectedListId: state.current["listId"]
})

const mapDispatchToProps = dispatch => ({

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
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDrawer);