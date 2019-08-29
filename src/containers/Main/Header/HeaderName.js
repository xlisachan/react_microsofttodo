import HeaderName from '../../../components/Main/Header/HeaderName';
import { connect } from 'react-redux';
import { renameList, setList } from '../../../actions';

const mapStateToProps = state => ({
    currentList: state.current.list,
    lists: state.lists
})

const mapDispatchToProps = dispatch => ({
    
    onSetList(title) {
        dispatch(
            setList(title)
        )
    },

    onRenameList(id, name) {
        dispatch(
            setList(name)
        )

        dispatch(
            renameList(id, name)
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(HeaderName);