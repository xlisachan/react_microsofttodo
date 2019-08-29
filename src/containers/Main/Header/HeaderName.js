import HeaderName from '../../../components/Main/Header/HeaderName';
import { connect } from 'react-redux';
import { renameList, setList } from '../../../actions';

const mapStateToProps = state => ({
    currentList: state.current.list,
    lists: state.lists
})

const mapDispatchToProps = dispatch => ({
    
    onSetList(id, title) {
        dispatch(
            setList(id, title)
        )
    },

    onRenameList(id, name) {
        dispatch(
            setList(id, name)
        )

        dispatch(
            renameList(id, name)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(HeaderName);