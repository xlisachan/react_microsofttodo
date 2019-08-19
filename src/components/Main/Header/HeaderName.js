import React from 'react';
import PropTypes from 'prop-types';

const HeaderName = React.forwardRef(({lists, placeholder, selectedListId, onRenameList=f=>f, onSetList=f=>f}, ref) => { 
    const selectedList = lists.filter(list => list.id === selectedListId);
    const defaultList = selectedList[0].defaultList;
    
    const onSubmit = e => {
        e.preventDefault();

        const namesOnList = lists.map(list => list.name);
        const regex=/^\s+$/;

        if (regex.test(placeholder) || placeholder === '') {
            let subName = "Untitled List"
            let num = 1
            
            while (namesOnList.includes(subName)) {
                subName = `Untitled List (${num})`;
                num++
            }
            onRenameList(selectedListId, subName);
        } else if (!namesOnList.includes(placeholder)){
            onRenameList(selectedListId, placeholder);
        } else if (namesOnList.includes(placeholder)) {
            let subName = placeholder;
            let num = 1;

            while (namesOnList.includes(subName)) {
                subName = `${subName} (${num})`
                num++
            }
            onRenameList(selectedListId, subName);
        }
    }

    const renderListTitle = () => {
        return (
            <form onSubmit={ onSubmit }>
                <h2 style={{fontWeight: 'bold'}} >
                    { defaultList ?
                        placeholder
                        :
                        <input
                            ref={ref}
                            type="text"
                            className="edit-input"
                            value={ placeholder }
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
    lists: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    selectedListId: PropTypes.string.isRequired,
    onRenameList: PropTypes.func.isRequired,
    onSetList: PropTypes.func.isRequired
}

export default HeaderName;