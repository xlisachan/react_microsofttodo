import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';

const HeaderContainer = React.forwardRef(({lists, open, selectedListId}, ref) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const formatColor = () => {
        return 'rgb(' + selectedList[0].color.join(',') + ')';
    };

    const secondaryColor = () => {
        const newArr = selectedList[0].color.map(col => parseInt(col * .6));
        const newColor = 'rgb(' + newArr.join(',') + ')';
        return newColor;
    };

    return (
        <Header 
            ref={ ref }
            name={ name }
            open={ open }
            selectedList={ selectedList }
            formatColor={ formatColor }
            secondaryColor={ secondaryColor }
        />
    );
});

HeaderContainer.propTypes = {
    lists: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    selectedListId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
});

export default connect(mapStateToProps, null, null, {forwardRef: true})(HeaderContainer);