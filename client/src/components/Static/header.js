import React from 'react';

const headerStyle = {
    backgroundColor: 'black',
    color:'white',
    textAlign:'center',
    textDecoration: 'none',
    padding: '25px'
};

const header = (props) => {
    return (
        <header style={headerStyle}>
            <h3>{props.fullName}</h3>
            <h4>{props.occupation}</h4>
            <p>{props.someSortMessage}</p>
        </header>
    )
};

export default header;