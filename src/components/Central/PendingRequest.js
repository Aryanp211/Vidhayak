import React, { Component } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core'

const Pendingrequest = props => (
  <tr>
    <td>{props.pendingrequest.username}</td>
    <td>{props.pendingrequest.req_Projname}</td>
    <td>{props.pendingrequest.req_state}</td>
    <td>{props.pendingrequest.req_category}</td>
    <td>{props.pendingrequest.req_description}</td>
    <td>{props.pendingrequest.req_duration}</td>

    <td>{props.pendingrequest.req_amount}</td>
    <td>{props.pendingrequest.req_date.substring(0,10)}</td>
    <td>{props.pendingrequest.req_status}</td>
    <td>

    <button className="btn btn-primary mx-1" 
    onClick={
        () => { 
          console.log(props.pendingrequest._id)
          props.updaterequest(props.pendingrequest._id)}}>
            Approve Request
      </button>
      
    </td>
  </tr>
)


class PendingRequest extends Component {
  constructor(props) {
    super(props);
    this.updaterequest = this.updaterequest.bind(this)
    this.state = {pendingrequests: []};
  }

  componentDidMount() {
    console.log('Mai agaya')

 
    console.log(this.props.history.location.state.name)
  
  axios.get('http://localhost:5000/requests/finderState/'+this.props.history.location.state.name)
  .then(response => {
    if (response.data.length > 0) {
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

  
  updaterequest(id) {
    console.log("This is the id ",id)
    axios.post('http://localhost:5000/requests/update/'+id)
      .then(response => { console.log(response.data)});
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
          <h3>{this.props.history.location.state.name} pending requests:</h3>
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


      <button className="Register" onClick={()=>{this.props.history.push('central/Pending')}}>Back</button>


      </div>
    )
  }
}

export default PendingRequest;