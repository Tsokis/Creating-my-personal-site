import React from 'react';

const headerStyle = {
    backgroundColor: 'black',
    color:'white',
    textAlign:'center',
    textDecoration: 'none',
    padding: '25px'
};

const header = () => {
    return (
        <div style={headerStyle}>
            <h3>Nik Ntaf</h3>
            <h4>Lorem ipsum dolor sit.</h4>
        </div>
    )
};

export default header;