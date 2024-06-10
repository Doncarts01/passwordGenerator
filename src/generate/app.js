import React from "react";
import myCss  from "./app.css";

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            passwordValue : ""
        }
        this.generatePassword = this.generatePassword.bind(this);
        this.copyPassword = this.copyPassword.bind(this);
    }
    

    generatePassword(){
        var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var numbers = "0123456789";
        var specialCharacters = "!@#$%^&*()";
        var passwordLength = 12;
        var password = "";
        var characters = lowerCaseLetters + upperCaseLetters + numbers + specialCharacters;
        var charactersLength = characters.length;
        for (var i = 0; i < passwordLength; i++) {
            password += characters[Math.floor(Math.random() * charactersLength)];
        }
        this.setState({
            passwordValue : password,
        })
    }


    copyPassword(){
        if(this.state.passwordValue == ''){
            alert(`This field cannot be empty`);
        }else{
            let theInput = document.getElementById("generate");
            theInput.select();
            document.execCommand('copy');
            alert("Password Copied");
        }
    }

    render() {
        return (
                <div className="design">
                    <div className="generate">
                        <div className="card">
                            <h1 style={{ color: 'white' }}>Generate a <span className="check">Random Password</span></h1>
                            <input type="text" id="generate" placeholder="Password" value={this.state.passwordValue} readOnly/> 
                            <button type="button" onClick={this.copyPassword} value="COPY" style={{ display: 'inline-block' }} >
                            <i className="fa-regular fa-copy"></i> COPY
                            </button>
                            <input type="button" value="Generate Password" onClick={this.generatePassword} />
                            <p style={{ color:'white', marginTop: '30px' }}>
                                MDTech || This is done using React JS
                            </p>
                        </div>
                    </div>
                </div>
        )
    }

}

export default App;