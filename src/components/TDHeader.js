import React from 'react';

const TDHeader= props => {
    return (
        <div style={{ 
            padding: '1rem 2rem',
            width: '100%',
            height: 90,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(80, 40, 250)',
            color: 'white'
        }}>

            <div>
                <div style={{fontSize: '1.8rem', fontWeight: 'bold'}}>
                    { props.listTitle }
                </div>

                <span>
                    { props.date }
                </span>
            </div>
        </div>
    );
}
 
export default TDHeader;