import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setList } from '../../../actions/currentActions';
import { renameList } from '../../../actions/listsActions';

const HeaderTitle = React.forwardRef(({
    currentList,
    lists,
    onRenameList = f => f,
    onSetList = f => f
}, ref) => {
    const selectedList = lists.filter(list => list.id === currentList.id);
    const defaultList = selectedList[0].defaultList;
    
    const onSubmit = e => {
        e.preventDefault();

        const namesOnList = lists.map(list => list.name);
        const regex=/^\s+$/;

        if (regex.test(currentList.title) || currentList.title === '') {
            let subName = "Untitled List"
            let num = 1
            
            while (namesOnList.includes(subName)) {
                subName = `Untitled List (${num})`;
                num++
            }
            onRenameList(currentList.id, subName);
        } else if (!namesOnList.includes(currentList.title)){
            onRenameList(currentList.id, currentList.title);
        } else if (namesOnList.includes(currentList.title)) {
            let subName = currentList.title;
            let num = 1;

            while (namesOnList.includes(subName)) {
                subName = `${subName} (${num})`
                num++
            }
            onRenameList(currentList.id, subName);
        }
    }

    return (
        <h2 className="main-header-title" >
            { defaultList ?
                currentList.title
                :
                <form onSubmit={ onSubmit }>
                    <input
                        ref={ref}
                        type="text"
                        className="edit-input"
                        value={ currentList.title }
                        onChange={e => onSetList(currentList.id, e.target.value)}
                    />
                </form>
            }
        </h2>
    )
});

HeaderTitle.propTypes = {
    currentList: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired,
    onRenameList: PropTypes.func.isRequired,
    onSetList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentList: state.current.list,
    lists: state.lists
});

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
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(HeaderTitle);
