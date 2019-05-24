import React, { Component } from 'react';
import '../../App.css';
import Input from './components/input';

const contactH3 = {
    textAlign:"center",
};
const h3Background = {
    // backgroundColor: ""
    color:"red"
};

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
            console.log("ooops gotcha");
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
            <section>
                <h3 style={contactH3}>Contact</h3>
                <div className="container contactDiv">
                    <form action="">
                        <Input label="I'am a Test Component" type="text" name="test" id="test" placeholder="Your test" value={this.state.test}
                        onChange={e=> this.setState({test:e.target.value})}
                        />
                        {this.state.fname === ""?<h3 style={h3Background}>Please Enter a Name *</h3>: ""}
                        <Input label="First Name" type="text" name="firstname" id="fname" placeholder="Your Name..." value={this.state.fname}
                               onChange={e=> this.setState({fname:e.target.value})}
                        />
                        {this.state.lname === ""?<h3 style={h3Background}>Please Enter a Last Name *</h3>: ""}
                        <Input label="Last Name" type="text" name="lastname" id="lname" placeholder="Your Last Name..." value={this.state.lname}
                               onChange={e=> this.setState({lname:e.target.value})}
                        />
                        {this.state.email === ""?<h3 style={h3Background}>Please Enter an Email Address *</h3>: ""}
                        <Input label="Email" type="email" name="email" id="email" placeholder="Your Email..." value={this.state.email}
                               onChange={e=> this.setState({email:e.target.value})}
                        />
                        {this.state.message === ""?<h3 style={h3Background}>Enter the your Contact Message *</h3>: ""}
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
            </section>
        )
    }
}


export default Contact;