import React, { Component } from 'react';
import '../../App.css';

class Contact extends Component {
    constructor(props){
        super(props);
        // Contact State
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.clearState = this.clearState.bind(this);
    }
    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }
    clearState(){
        this.setState({fname: '',
            lname: '',
            email: '',
            message: '',})
    }

    render() {
        return (
            <div className="container">
                <h3>Contact</h3>
                <div>
                    <form action="">
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.."
                               value={this.state.fname}
                               onChange={e => this.setState({ fname: e.target.value })}
                        />
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."
                               value={this.state.lname}
                               onChange={e => this.setState({ lname: e.target.value })}
                        />
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Your email"
                               value={this.state.email}
                               onChange={e => this.setState({ email: e.target.value })}
                        />
                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."
                                  onChange={e => this.setState({ message: e.target.value })}
                                  value={this.state.message}
                        ></textarea>
                        <input type="submit" onClick={e => {
                            this.handleFormSubmit(e);
                            this.clearState();
                         }
                        } value="Submit" />

                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;