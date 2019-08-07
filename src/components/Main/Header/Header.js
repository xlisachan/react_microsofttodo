import React from 'react';
import PropTypes from 'prop-types';
import HeaderName from '../../../containers/Main/Header/HeaderName';
import HeaderButton from './HeaderButton';
import SortBar from '../../../containers/Main/Header/SortBar';
import { getCurrentDateObj, headerFormat } from '../../../getDate';

const Header = React.forwardRef(({lists, selectedListId}, ref) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const getTodaysDate = () =>
        <span style={{display: name === "My Day" ? 'block' : 'none'}}>
            { headerFormat(getCurrentDateObj()) }
        </span>

    const formatColor = () => {
        return 'rgb(' + selectedList[0].color.join(',') + ')';
    };

    const secondaryColor = () => {
        const newArr = selectedList[0].color.map(col => parseInt(col * .6));
        const newColor = 'rgb(' + newArr.join(',') + ')';
        return newColor;
    };

    const renderSortBar = () => {
        return selectedList[0].sorted ? <SortBar barColor={ secondaryColor() } /> : null
    };
        
    return (
        <div>
            <header className="header" style={{backgroundColor: formatColor()}}>
                <div>
                    <HeaderName ref={ref} />

                    { getTodaysDate() }
                </div>

                <HeaderButton buttonColor={ secondaryColor() } />
            </header>

            { renderSortBar() }
        </div>
    );
})

Header.propTypes = {
    lists: PropTypes.array,
    selectedListId: PropTypes.string.isRequired
}

export default Header;