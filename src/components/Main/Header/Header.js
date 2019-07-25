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
        return selectedList[0].sorted ? <SortBar /> : null
    }

    return (
        <div>
            <header className="header">
                <div>
                    <h2 style={{ fontWeight: 'bold'}}>
                        { listTitle }
                    </h2>

                    <span style={{display: listTitle === "My Day" ? 'inline' : 'none'}}>
                        { getTodaysDate() }
                    </span>
                </div>

                <HeaderButton />
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