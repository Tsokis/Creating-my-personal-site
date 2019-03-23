import React, { Component } from 'react';
import '../../App.css';
import Input from './components/input';

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
            test:'',
            hasError: null,
            isSubmitted: false
        };
        this.checkMessage = this.checkMessage.bind(this);
    }
    checkMessage = () => {
        return {
            display: this.state.isSubmitted ? 'block': 'none'
        }
    };

    clientValidation() {
        const { fname,lname,email,message } = this.state;
        if (fname!=="" && lname!=="" && email !=="" && message !== "") {
            this.setState({hasError: false});
            console.log(`Your Response was ${fname} ${lname} ${email} ${message}`);
        } else {
            console.log('has error');
            this.setState({hasError: true,isSubmitted:true});
            if(fname ===""){
                console.log("empty name");
            } else if(lname === ""){
                console.log("empty lastname");
            }else  if(email === ""){
                console.log("empty email")
            }else{
                console.log("empty message");;
            }
        }
    }
    handleFormSubmit( event ) {
        let letters = /^[A-Za-z]+$/;
        event.preventDefault();
        this.clientValidation();
        console.log(this.state);
        if(this.state.fname.match(letters)) {
            console.log('works');
        }else{
            alert("ooops gotcha");
        }
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
                        <Input label="I'am a Test Component" type="text" name="test" id="test" placeholder="Your test" value={this.state.test}
                        onChange={e=> this.setState({test:e.target.value})}
                        />
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
                        {this.state.hasError ? <h3>You must enter something</h3> : <h3 style={this.checkMessage()}>Form Submitted</h3>}
                    </form>
                </div>
            </div>
        )
    }
}


export default Contact;