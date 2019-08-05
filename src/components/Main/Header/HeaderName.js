import React from 'react';
import PropTypes from 'prop-types';

const HeaderName = ({lists, placeholder, selectedListId, onSetPlaceholder=f=>f}) => { 
    const selectedList = lists.filter(list => list.id === selectedListId);
    const defaultList = selectedList[0].defaultList;
    
    const renderListTitle = () => {
        return (
            <h2 style={{fontWeight: 'bold'}} >
                { defaultList ?
                    placeholder
                    :
                    <input
                        type="text"
                        className="edit-input"
                        value={ placeholder }
                        onChange={e => onSetPlaceholder(e.target.value)}
                    />
                }
            </h2>
            
        )
    }

    return (
        renderListTitle()
    )
}

HeaderName.propTypes = {
    lists: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    selectedListId: PropTypes.string.isRequired,
    onSetPlaceholder: PropTypes.func.isRequired
}

export default HeaderName;