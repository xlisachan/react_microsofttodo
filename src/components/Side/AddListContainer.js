import React from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addList } from '../../actions/listsActions';
import { setList } from '../../actions/currentActions';
import AddList from './AddList';

const AddListContainer = ({lists, onAddList=f=>f, onEditClick=f=>f, onClose=f=>f})  => {
    const namesOnList = lists.map(list => list.name);

    const setListName = () => {
        let subName = "Untitled List";
        let num = 1;

        while (namesOnList.includes(subName)) {
            subName = `Untitled List ${num}`;
            num++;
        }

        return subName;
    }

    const handleClick = () => {
        const newList = {
            id: uuid.v4(),
            name: setListName(),
            orderBy: 'date_created',
            orderDir: 'asc',
            sorted: false,
            hideCompleted: false,
            color: [80,40,250],
            defaultList: false
        }

        onAddList(newList);
        onEditClick();
        onClose();
    }

    return (
        <AddList onClick={ handleClick } />
    );
}

const mapStateToProps = state => ({
    lists: state.lists,
})

const mapDispatchToProps = dispatch => ({
    onAddList({id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList}) {
        dispatch(
            addList(id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList)
        )

        dispatch(
            setList(id, name)
        )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddListContainer);