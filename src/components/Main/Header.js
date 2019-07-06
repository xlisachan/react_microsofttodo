import React from 'react';

const Header = ({listTitle, todaysDate}) => {
    return (
        <header className="header">
            <div>
                <h2 style={{ fontWeight: 'bold'}}>
                    { listTitle }
                </h2>

                <span style={{display: listTitle === "My Day" ? 'inline' : 'none'}}>
                    { todaysDate }
                </span>
            </div>
        </header>
    );
}

export default Header;