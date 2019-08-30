import React from 'react';
import PropTypes from 'prop-types';

const AddItem = React.forwardRef(({item, placeholder, renderButton, itemStyle=f=>f, onChange=f=>f, onSubmit=f=>f}, ref) => {
    return (
        <form className="add-form align-center" style={ itemStyle() } onSubmit={ onSubmit }>
            <button className="add-btn" type="submit">
                { !item ?  renderButton.add : renderButton.status }
            </button>
            
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
    );
})

AddItem.propTypes = {
    item: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    renderButton: PropTypes.object.isRequired,
    itemStyle: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default AddItem;