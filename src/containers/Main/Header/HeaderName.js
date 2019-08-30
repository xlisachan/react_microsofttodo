import React from 'react';
import { connect } from 'react-redux';
import { renameList, setList } from '../../../actions';
import HeaderName from '../../../components/Main/Header/HeaderName';

const HeaderNameContainer = React.forwardRef(({currentList, lists, onRenameList=f=>f, onSetList=f=>f}, ref) => { 
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
        <HeaderName 
            ref={ ref }
            currentList={ currentList }
            lists={ lists }
            onSetList={ onSetList }
            onSubmit={ onSubmit }
        />
    )
})

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

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(HeaderNameContainer);