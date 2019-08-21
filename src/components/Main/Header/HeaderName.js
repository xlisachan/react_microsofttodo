import React from 'react';
import PropTypes from 'prop-types';

const HeaderName = React.forwardRef(({currentList, lists, onRenameList=f=>f, onSetList=f=>f}, ref) => { 
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

    const renderListTitle = () => {
        return (
            <form onSubmit={ onSubmit }>
                <h2 style={{fontWeight: 'bold'}} >
                    { defaultList ?
                        currentList.title
                        :
                        <input
                            ref={ref}
                            type="text"
                            className="edit-input"
                            value={ currentList.title }
                            onChange={e => onSetList(e.target.value)}
                        />
                    }
                </h2>
            </form>
        )
    }

    return (
        renderListTitle()
    )
})

HeaderName.propTypes = {
    currentList: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired,
    onRenameList: PropTypes.func.isRequired,
    onSetList: PropTypes.func.isRequired
}

export default HeaderName;