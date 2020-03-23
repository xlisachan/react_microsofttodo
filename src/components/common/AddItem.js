import React from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';

const AddItem = React.forwardRef(({addItem, item, placeholder, itemStyle=f=>f, onChange=f=>f, onSubmit=f=>f}, ref) => (
    <form className="add-form align-center" style={ itemStyle() } onSubmit={ onSubmit }>
        <AddButton addItem={addItem} item={item} />
        
        <input
            ref={ref}
            style={{flex: '10', padding: 5, border: 'none'}}
            type="text"
            name="item"
            placeholder={ placeholder }
            value={ item }
            onChange={ e => onChange(e.target.value) }
        />
    </form>
));

AddItem.propTypes = {
    addItem: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    itemStyle: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default AddItem;