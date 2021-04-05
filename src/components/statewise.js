import React, { Component } from 'react';
import axios from 'axios';

const StatewiseTransaction = props => (
  <tr>
  <td>{props.transaction.username}</td>
  <td>{props.transaction.req_Projname}</td>
  <td>{props.transaction.req_state}</td>
  <td>{props.transaction.req_category}</td>
  <td>{props.transaction.req_description}</td>
  <td>{props.transaction.req_duration}</td>
  <td>{props.transaction.req_amount}</td>
  <td>{props.transaction.req_date.substring(0,10)}</td>
  <td>{props.transaction.req_status}</td>
</tr>
)


export default class Statewise extends Component {
  
  constructor(props) {
    super(props);
    this.onChangereq_state = this.onChangereq_state.bind(this);
    this.state = {
      
        username: '',
        req_Projname:'',
        req_category: 'Education',
        req_duration:'',
        req_authoby:'none',
        req_state:'Maharashtra',
        req_description:'',
        req_amount: 0,
        req_status:'Pending',
  
        req_date: new Date(),
        state: [],
        category:[]
      }

    this.state = {transactions: []};
  }

  componentDidMount() {
    
        this.setState({
            state: ['Maharashtra','Uttar Pradesh','Madhya Pradesh','Kerela','Punjab','West Bengal'],
            
        })

        axios.post('http://localhost:5000/requests/')
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              requests: response.data,
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
  };




  onChangereq_state(e) {
    this.setState({
         req_state: e.target.value
    })
  };

  transactionList() {
    return this.state.transactions.map(alltransaction => {
      return <StatewiseTransaction transaction={alltransaction}  key={alltransaction._id}/>;
    })
  };

  onSubmit(e) {
    e.preventDefault();
    const req_state=e.target.value
    axios.post('http://localhost:5000/requests/'+req_state)
      .then(response => { console.log(response.data)});

    this.setState({
      requests: this.state.requests.filter(pc => pc._req_state !== req_state)
    })
  };
  


  render() {
    return (
        <div>
          <br></br>
          <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
          <label>Select State </label>
          <select ref="userInput"
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
        </form>
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
            {this.transactionList()}
          </tbody>
        </table>
      </div>
    )
  }
}