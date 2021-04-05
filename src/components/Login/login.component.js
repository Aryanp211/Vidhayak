import React, { Component } from 'react';
// import '.../App.css';
//import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePass = this.onChangePass.bind(this);
      this.onlogin = this.onlogin.bind(this);
      this.onregister = this.onregister.bind(this);
      this.state = {
      
        user_email: '',
        user_password: '',
        choice: '',
      }
    }
  
    componentDidMount() {
        this.setState({

        })
    }

  onChangeEmail(e) {
    this.setState({
      user_email: e.target.value
    })
  }

  onChangePass(e) {
    this.setState({
      user_password: e.target.value
    })
  }

  onregister(e){
      console.log('register method called');
      window.location='/register';
  }
  onlogin(e) {
    e.preventDefault();

    const user = {
      user_email: this.state.user_email,
      user_password: this.state.user_password,
    }

    console.log(user);
    this.setState({
        user_email: '',
        user_password: '',       
      })
    //window.location='/user';
    window.location=this.state.choice;
    }

    setChoice(e){
      console.log(e.target.value);
      this.setState({
        choice: e.target.value
      })
    }

    render() {
        return (
        <div>
        <h3>Login/Register</h3>
        <form onSubmit={this.onlogin}>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.user_email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.user_password}
              onChange={this.onChangePass}
              />
        </div>
        <div class="form-group" data-toggle="buttons" onChange={this.setChoice.bind(this)}>
            <label class="btn btn-secondary rounded">
                <input type="radio" name="options" id="option1" autocomplete="off" value="/stategov"/>State
            </label>
            <label class="btn btn-secondary rounded mx-1">
                <input type="radio" name="options" id="option2" autocomplete="off" value="/central"/> Central
            </label>           
        </div>
        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
          <button className="btn btn-primary mx-1" onClick={() => {this.onregister()}}>Register</button>  
        </div>
        </form>
        
    </div>
    )
  }
}