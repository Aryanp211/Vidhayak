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
    
  </tr>
)


class PrintAuthTable extends Component {
  constructor(props) {
    super(props);
    this.updaterequest = this.updaterequest.bind(this)
    this.state = {
      pendingrequests: [],
      category:this.props.history.location.category,
      statename:this.props.history.location.statename
    };
  }

  componentDidMount() {
    console.log('Mai agaya')

  // axios.get('http://localhost:5000/requests/finder/Pending')
  // .then(response => {
  //   if (response.data.length > 0) {
  //     console.log(response.data)
  //     this.setState({
  //       pendingrequests: response.data,
  //     })
  //   }
  // })
  // .catch((error) => {
  //   console.log('hahahaha');
  // })
  console.log('Rajat Lauda')
    console.log(this.props.history.location.state.statename)

    const details={
      statename:this.props.statename,
      category:this.props.category
    }
    // let rawUrl = 'http://localhost:5000/requests/finderState/?page=2&limit=3';
    // let parsedUrl = url.parse(rawUrl);
    // let parsedQs = querystring.parse(parsedUrl.query);
  
   
  
    
    var request = {
      params: {
          statename:this.props.history.location.state.statename,
          category:this.props.history.location.state.category
    }
  }
  http://localhost:5000/state/findAuth/?statename=Maharashtra&category=Agriculture 

  axios.get('http://localhost:5000/states/findAuth/',request)
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
    axios.post('http://localhost:5000/state/update/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      pendingrequests: this.state.pendingrequests.filter(pc => pc._id !== id)
    })
  }


  pendingrequestList() {
    return this.state.pendingrequests.map(allpendingrequestlist => {
      return <Pendingrequest pendingrequest={allpendingrequestlist}  key={allpendingrequestlist._id}/>;
    })
  }


  render() {
    return (
        <div>
          <br></br>
          <h3>{this.props.history.location.state.category} approved requests:</h3>
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

      <button className="Register" onClick={()=>{this.props.history.push('stategov/Authorized')}}>Back</button>
      </div>
    )
  }
}

export default PrintAuthTable;