import React, { Component } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core'

const Pendingrequest = props => (
  <tr>
    <td>{props.pendingrequest.state_gov.username}</td>
    <td>{props.pendingrequest.req_Projname}</td>
    <td>{props.pendingrequest.req_state}</td>
    <td>{props.pendingrequest.req_category}</td>
    <td>{props.pendingrequest.req_description}</td>
    <td>{props.pendingrequest.req_duration}</td>

    <td>{props.pendingrequest.req_amount}</td>
    <td>{props.pendingrequest.state_gov.req_date.substring(0,10)}</td>
    <td>{props.pendingrequest.req_status}</td>
    <td>

    <button className="btn btn-primary mx-1" 
    onClick={
        () => { 
          console.log(props.pendingrequest._id)
          props.updaterequest(props.pendingrequest.state_gov.req_date,props.pendingrequest._id)}}>
            Approve Request
      </button>
      
    </td>
  </tr>
)


class PendingRequest extends Component {
  constructor(props) {
    super(props);
    this.updaterequest = this.updaterequest.bind(this)
    this.state = {pendingrequests: [], data:this.props.data,category:this.props.history.location.state.name};

  }

  componentDidMount() {
    console.log('M')
    console.log(this.props)

 console.log('||||||||||||||||||||||||||||||||||||||||')
    console.log(this.props.history.location.state.name)
    var request = {
      params: {
          data:this.props.data,
          category:this.props.history.location.state.name
    }
  }
  axios.get('http://localhost:5000/requests/finderState/'+this.state.category)
  .then(response => {
    if (response.data.length > 0) {
      console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[')
      console.log(response.data)
      this.setState({
        pendingrequests: response.data,
      })
    }
  })
  .catch((error) => {
    console.log('hahahaha');
  })
  }

  
  updaterequest(req_date,id) {
    console.log("This is the id ",id)
   
     let details= {
          data:this.props.data,
          id:id,
          date:new Date(),
          //req_date:req_date()
    }
  console.log('ZZZZZZZZZZZZZZZZZ',this.props.data)
    axios.post('http://localhost:5000/requests/update/',details)
      .then(response => { console.log(response.data)}).catch(e=>console.log('ERROR!!!!!!!!!!!!'));
    this.setState({
      pendingrequests: this.state.pendingrequests.filter(pc => pc._id !== id)
    })
  }


  pendingrequestList() {
    return this.state.pendingrequests.map(allpendingrequestlist => {
      return <Pendingrequest pendingrequest={allpendingrequestlist} updaterequest={this.updaterequest} key={allpendingrequestlist._id}/>;
    })
  }


  render() {
    return (
        <div>
          <br></br>
          <h3 style={{fontFamily:'Montserrat', textAlign:'center'}}>PENDING REQUESTS: {(this.props.history.location.state.name).toUpperCase()}  <hr></hr></h3>
        {/* <h3>Pending Requests:</h3> */}
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Leader Name</th>
              <th>Project Name</th>
              <th>State</th>
              <th>Category</th>
              <th>Project Descript</th>
              <th>Project duration</th>
              <th>Project Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.pendingrequestList()}
          </tbody>
        </table>


      <Button style={{color:'white',backgroundColor:'black', fontSize:12, fontFamily:'Montserrat'}} className="Register" onClick={()=>{this.props.history.push('central/Pending')}}>Back</Button>


      </div>
    )
  }
}

export default PendingRequest;