import React, { Component } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core'
import Web3 from 'web3';
import Mycontract from "../contracts/Transactions.json";
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
          props.updaterequest(props.pendingrequest.state_gov.req_date,props.pendingrequest._id,props.pendingrequest.req_amount)}}>
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
    console.log('Mai agaya')
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

  async componentWillMount() 
  {
    await this.loadWeb3()
    //console.log(window.web3);
    
  }


  async loadWeb3() {
    if(window.ethereum)
    {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable();
    }
    else if(window.web3)
    {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else
    {
      window.alert('Non-Ethereum browser derected')
    }
}
  async loadBlockChainData(_amount){
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts()
    console.log(accounts);
    const id = await web3.eth.net.getId();
    const networkData = Mycontract.networks[id]
    const instance = new web3.eth.Contract(Mycontract.abi, networkData.address)
    //console.log(networkData.address)
    var amount = _amount;
    console.log(amount);
       //var etherValue = Web3.utils.toWei(amount, 'ether')
    
       const send_to_sgovt = instance.methods.funds_To_SG('0xdC9E3631F7fa43E4CEEf53C491A2A788815ae9f3').send({
        from: '0x357512E19786C3Fa08e307faC112894caEEee54E',
        value: web3.utils.toWei((amount).toString(), "ether")
      })
      }
  
  updaterequest(req_date,id,req_amt) {
    console.log("This is the id ",id)
   
     let details= {
          data:this.props.data,
          id:id,
          date:new Date(),
          //req_date:req_date()
    }
    this.loadBlockChainData(req_amt);
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