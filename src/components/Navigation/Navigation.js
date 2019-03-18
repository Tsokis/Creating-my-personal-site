import React, { Component } from 'react';
import '../../App.css';

class Navigation extends Component {
    constructor(props){
        super(props);
        // State
        this.state = {
            isOpen: false
        };
        this.handleNav = this.handleNav.bind(this);
        this.navStyle = this.navStyle.bind(this);
    }
    // navigation menu method returns a "css" object
    navStyle = () => {
        return {
            display: this.state.isOpen ? 'block': 'none',
            listStyleType: 'none',
            backgroundColor: 'transparent',
            //#4C8CB5
            position: 'absolute',
            textDecoration:'none',
            top: '0',
            right: '0',
            width: '30%',
            height: '100vh'
        }
    };
    //method for handling the button responsible for the opening and closing the navigation menu
    handleNav(){
        return this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    render() {
        return (
            <div style={divStyle}>
                <button onClick={this.handleNav} style={buttonStyle}>NAV</button>
                <nav style={this.navStyle()}>
                    <ul className="nav-ul">
                        <li>{this.props.home}</li>
                        <li>{this.props.about}</li>
                        <li>{this.props.contact}</li>
                    </ul>
                </nav>
            </div>
        );
    }
}
// "css" objects
const divStyle = {
  position: 'relative'
};
const buttonStyle = {
    zIndex:'1',
    position: 'absolute',
    top: '0',
    right: '0'
};

export default Navigation;
