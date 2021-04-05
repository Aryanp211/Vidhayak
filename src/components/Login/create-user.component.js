import React, { Component } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
//import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePass = this.onChangePass.bind(this);
    this.onChangeMobile = this.onChangeMobile.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
   this.onChangePost = this.onChangePost.bind(this);
   
   this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      
     stateuser_name: '',
      stateuser_email: '',
      stateuser_password: '',
      stateuser_mobile: 0,
      stateuser_State:'',
      stateuser_Post: '',
      states: []
    }
  }

  componentDidMount() {
      this.setState({
          states: ['Mh','MP','Guj','Keral','Delhi','Goa'],
          stateuser_State: 'Mh'
      })
  }
  onChangeUsername(e) {
    this.setState({
     stateuser_name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      stateuser_email: e.target.value
    })
  }

  onChangePass(e) {
    this.setState({
      stateuser_password: e.target.value
    })
  }

  onChangeMobile(e) {
    this.setState({
      stateuser_mobile: e.target.value
    })
  }

  onChangeState(e) {
    this.setState({
      stateuser_State: e.target.value
    })
  }
  onChangePost(e) {
    this.setState({
      stateuser_Post: e
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const stateuser = {
     stateuser_name: this.state.stateusername,
      stateuser_email: this.state.stateuser_email,
      stateuser_password: this.state.stateuser_password,
      stateuser_mobile: this.state.stateuser_mobile,
      stateuser_State: this.state.stateuser_State,
      stateuser_Post: this.state.stateuser_Post
    }

    console.log(stateuser);

    axios.post('http://localhost:5000/stateusers/add', stateuser)
      .then(res => console.log(res.data));
      
    this.setState({
     stateuser_name: '',
      stateuser_email: '',
      stateuser_password: '',
      stateuser_mobile: 0,
      stateuser_State:'',
      stateuser_Post: '',
    })
    window.location='/';
  }

  render() {
    return (
    <div>
      <br></br>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.stateusername}
              onChange={this.onChangeUsername}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.stateuser_email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.stateuser_password}
              onChange={this.onChangePass}
              />
        </div>
        <div className="form-group"> 
          <label>Mobile: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.stateuser_mobile}
              onChange={this.onChangeMobile}
              />
        </div>
        <div className="form-group">
          <label>State: </label>
          <select ref="stateuserInput"
              required
              className="form-control"
              value={this.state.stateuser_State}
              onChange={this.onChangeState}>
              {
                this.state.states.map(function(stateuser) {
                  return <option 
                    key={stateuser}
                    value={stateuser}>{stateuser}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group">
          <label>POSTS:</label>
          <div>
          <input  type="text"
              required
              className="form-control"
              value={this.state.stateuser_Posts}
              onChange={this.onChangePost}
              />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}