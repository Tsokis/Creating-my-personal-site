import React from 'react';

const footerStyle = {
    position: 'fixed',
    backgroundColor: 'lightgrey',
    textAlign: 'center',
    padding: '1rem',
    bottom:'0px',
    right: '0px',
    left: '0px',
    width: '100%'
};

const footer = () => {
    return (
        <footer className="footer">
            <div style={footerStyle}>
                <p>footer</p>
            </div>
        </footer>
    )
};

export default footer;