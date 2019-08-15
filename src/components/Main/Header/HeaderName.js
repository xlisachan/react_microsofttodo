import React from 'react';
import PropTypes from 'prop-types';

const HeaderName = React.forwardRef(({lists, placeholder, selectedListId, onSetList=f=>f}, ref) => { 
    const selectedList = lists.filter(list => list.id === selectedListId);
    const defaultList = selectedList[0].defaultList;
    
    const renderListTitle = () => {
        return (
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
    onSetList: PropTypes.func.isRequired
}

export default HeaderName;