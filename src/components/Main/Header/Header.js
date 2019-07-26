import React from 'react';
import PropTypes from 'prop-types';
import HeaderButton from './HeaderButton';
import SortBar from '../../../containers/Main/Header/SortBar';
import { getCurrentDateObj, headerFormat } from '../../../getDate';

const Header = ({lists, listTitle}) => {
    const selectedList = lists.filter(list => list.name === listTitle)
    
    const getTodaysDate = () => {
        return headerFormat(getCurrentDateObj());
    }
    
    const renderSortBar = () => {
        return selectedList[0].sorted ? <SortBar barColor={ secondaryColor() } /> : null
    }

    const formatColor = () => {
        return 'rgb(' + selectedList[0].color.join(',') + ')';
    }

    const secondaryColor = () => {
        const newArr = selectedList[0].color.map(col => parseInt(col * .6));
        const newColor = 'rgb(' + newArr.join(',') + ')';
        return newColor;
    }

    return (
        <div>
            <header 
                className="header"
                style={{backgroundColor: formatColor() }}>
                <div>
                    <h2 style={{ fontWeight: 'bold'}}>
                        { listTitle }
                    </h2>

                    <span style={{display: listTitle === "My Day" ? 'inline' : 'none'}}>
                        { getTodaysDate() }
                    </span>
                </div>

                <HeaderButton buttonColor={ secondaryColor() } />
            </header>
            
            { renderSortBar() }
        </div>
    );
}

Header.propTypes = {
    lists: PropTypes.array,
    listTitle: PropTypes.string.isRequired
}

export default Header;