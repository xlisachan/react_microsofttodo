import React from 'react';

const TDHeader = props => {
    return (
        <header style={ headerStyle }>
            <div>
                <div style={{fontSize: '1.8rem', fontWeight: 'bold'}}>
                    { props.listTitle }
                </div>

                <span>
                    { props.date }
                </span>
            </div>
        </header>
    );
}

const headerStyle = {
    padding: '1rem 2rem',
    width: '100%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(80, 40, 250)',
    color: 'white'
}
 
export default TDHeader;