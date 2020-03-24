import React from 'react';
import PropTypes from 'prop-types';

const Title = React.forwardRef(({currentList, lists, onSetList=f=>f, onSubmit=f=>f}, ref) => { 
    const selectedList = lists.filter(list => list.id === currentList.id);
    const defaultList = selectedList[0].defaultList;

    return (
        <h2 style={{fontWeight: 'bold'}} >
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

Title.propTypes = {
    currentList: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired,
    onSetList: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Title;