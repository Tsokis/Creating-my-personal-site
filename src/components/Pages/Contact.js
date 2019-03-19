import React, { Component } from 'react';
import '../../App.css';

const contactH3 = {
    textAlign:"center",
};
//let hasError = true;

class Contact extends Component {

    constructor(props){
        super(props);
        // Contact State
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            hasError: null
        };
    }
    clientValidation() {
        const { fname,lname,email,message,hasError } = this.state;
        if (fname!=="" || lname!=="" || email !==""|| message !== "") {
            this.setState({hasError: false});
            console.log(`Your Response was ${fname} ${lname} ${email} ${message}`);
        } else {
            console.log('has error');
            this.setState({hasError: true});
            console.log(hasError);
        }
    }
    handleFormSubmit( event ) {
        event.preventDefault();
        this.clientValidation();
        console.log(this.state);
    }
    clearState(){
        this.setState({
            fname: '',
            lname: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <h3 style={contactH3}>Contact</h3>
                <div className="container contactDiv">
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
                            //this.clientValidation();
                            this.clearState();
                         }
                        } value="Submit" />
                        {this.state.hasError ? <h3>You must enter something</h3> : <h3>Form Submitted</h3>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact;