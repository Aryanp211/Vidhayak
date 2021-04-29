import axios from 'axios';
import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Form} from 'react-advanced-form'
import {Button} from '@material-ui/core'

 class request extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onreq_category = this.onreq_category.bind(this);
    this.onChangeamount = this.onChangeamount.bind(this);
    this.onChangereq_state = this.onChangereq_state.bind(this);
    this.onChangereq_description = this.onChangereq_description.bind(this);
   // this.onChangereq_status = this.onChangereq_status.bind(this);
    this.onChangereq_date=this.onChangereq_date.bind(this);
    this.onChangereq_duration = this.onChangereq_duration.bind(this);
   // this.onChangereq_authoby = this.onChangereq_authoby.bind(this);
    this.onChangereq_Projname = this.onChangereq_Projname.bind(this);

    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      
      username: '',
      state_id:0,
      req_Projname:'',
      req_category: 'Education',
      req_duration:'',
    
      req_state:'Maharashtra',
      req_description:'',
      req_amount: 0,
      req_status:'Pending',

      req_date: new Date(),
      state: [],
      category:[]
    }
  }

  componentDidMount() {
      this.setState({
        username:this.props.data.user_firstname+' '+this.props.data.user_lastname,
        state_id:this.props.data._id,
          state: ['Maharashtra','Uttar Pradesh','Madhya Pradesh','Kerela','Punjab','West Bengal'],
          category:['Education','Agriculture','Transportation','Infrastructure','Technology','Energy','Enviornment','Health'],
      })
  }

  
  onChangeUsername(e) {
    this.setState({
        username: e.target.value
    })
  }

  onreq_category(e) {
    this.setState({
        req_category: e.target.value
    })
  }

  onChangereq_state(e) {
    this.setState({
         req_state: e.target.value
    })
  }

  onChangereq_description(e) {
    this.setState({
        req_description: e.target.value
    })
  }

  onChangeamount(e) {
    this.setState({
      req_amount: e.target.value
    })
  }

  // onChangereq_status(e) {
  //   this.setState({
  //       req_status: e.target.value
  //   })
  // }
  onChangereq_date(date) {
    this.setState({
        req_date: date
    })
  }

  onChangereq_Projname(e) {
    this.setState({
        req_Projname:e.target.value
    })
  }
  onChangereq_duration(e) {
    this.setState({
        req_duration: e.target.value
    })
  }
  

  onSubmit(e) {
    e.preventDefault();

    const reque = {
      username: this.state.username,
      state_id:this.state.state_id,
      req_Projname:this.state.req_Projname,
      req_state: this.state.req_state,
      req_category: this.state.req_category,
      req_description : this.state.req_description ,
      req_duration:this.state.req_duration,
      req_amount: this.state.req_amount,
      req_date: this.state.req_date,
      req_status : this.state.req_status ,
     
    }

    console.log(reque);

    axios.post('http://localhost:5000/requests/add', reque)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      req_Projname:'',
      req_category: 'Education',
      req_state: 'Maharashtra',
      req_description:'',
      req_duration:'',
      req_amount: 0,
      req_status: 'Pending',
      req_date: new Date(),
      req_authoby:'None'
    })

    // this.resetState()
  }


  resetState=()=>{
    this.setState({})
  }

 
  render() {
    return (
    <div>
       <div style={{fontFamily:'Montserrat',textAlign:'center',alignContent:'center', fontSize:30}}>ENTER NEW REQUEST<hr></hr></div>
      <form className='form' onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label className='AllocLabel'>Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>

        <div className="form-group"> 
          <label className='AllocLabel'>Project Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.req_Projname}
              onChange={this.onChangereq_Projname}
              />
        </div>

        <div className="form-group"> 
          <label className='AllocLabel'>Select State </label>
          <select className='FormSelect' ref="userInput"
              required
              className="form-control"
              value={this.state.req_state}
              onChange={this.onChangereq_state}>
              {
                this.state.state.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group">
          <label className='AllocLabel'>Enter the Field: </label>
          <select className='FormSelect' ref="userInput"
              required
              className="form-control"
              value={this.state.req_category}
              onChange={this.onreq_category}>
              {
                this.state.category.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>

        <div className="form-group"> 
          <label className='AllocLabel'>Project description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.req_description}
              onChange={this.onChangereq_description}
              />
        </div>

        <div className="form-group"> 
          <label className='AllocLabel'>Project duration: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.req_duration}
              onChange={this.onChangereq_duration}
              />
        </div>


        <div className="form-group"> 
          <label className='AllocLabel'>amount: </label>
          <input  type="Text"
              required
              className="form-control"
              value={this.state.req_amount}
              onChange={this.onChangeamount}
              />
        </div>

        
        <div className="form-group">
          <label className='AllocLabel'>Date of project: </label>
          <div>
            <DatePicker
              selected={this.state.req_date}
              onChange={this.onChangereq_date}
            />
          </div>
        </div>

        
        <div className="form-group">

       
          <Button type="submit" style={{fontFamily:'Montserrat',backgroundColor:'black',color:'white'}} value="Register request" className="Register" >Register</Button>


          {/* <button value='Reset' className="ResetButton" onClick={this.resetState}/> */}
        </div>
      </form>
    </div>
    )
  }
}
export default request;