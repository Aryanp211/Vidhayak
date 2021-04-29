import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import CreateUser from './components/Login/create-user.component';
import Login from './components/Login/Login';
import Stategov  from './components/State/Stategov';
import central  from "./components/Central/central";
import contractor  from "./components/Contractor/contractor"
import tp from './components/Central/tp'
import ModalTest from './components/Test/ModalTest';
import Lower from './components/Login/Lower';
import Web3 from 'web3';
import Mycontract from "./components/contracts/Transactions.json";

class App extends Component{
  async componentWillMount() 
    {
      await this.loadWeb3()
      //console.log(window.web3);
      await this.loadBlockChainData()
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
    async loadBlockChainData(){
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts()
      console.log(accounts);
      const id = await web3.eth.net.getId();
      const networkData = Mycontract.networks[id]
      const instance = new web3.eth.Contract(Mycontract.abi, networkData.address)
      //console.log(networkData.address)
      this.setState({account : accounts[0]})
      console.log(accounts[0])
     // var amount = '15';
       //var etherValue = Web3.utils.toWei(amount, 'ether')
    
      //  const request_Cent_govt = instance.methods.request_Funds_to_CG('0xdC9E3631F7fa43E4CEEf53C491A2A788815ae9f3',amount)
      //  .send({
      //    from: '0xdC9E3631F7fa43E4CEEf53C491A2A788815ae9f3'// here I paste recently created address
      //  }).then(res=>{
      //    console.log('Updated');
      //  });
       
      //  const send_to_sgovt = instance.methods.funds_To_SG().send({
      //    from: '0xe41B3B3e1812c7ae04E3F05daF91e7eF3BC85511',
      //    value: web3.utils.toWei(amount, "ether")

      //  })
       
      //  var part_amount = '5';
      //  //var etherValue1 = Web3.utils.toWei(part_amount, 'ether')
      //  const send_to_contractor = instance.methods.funds_To_Contractor('0xE4f026137C4BfCD6e75304d69DB8833868c98de0',part_amount)
      //  .send({
      //    from:'0xdC9E3631F7fa43E4CEEf53C491A2A788815ae9f3',
      //    value: web3.utils.toWei(part_amount,"ether")
      //  })
      //  var vendors_payment = '2';
      //  const to_vendors = instance.methods.payment_from_Contractor('0x8b2E48DD1189Ade0A322Dcf4ef06cCFAe056eDf2')
      //  .send({
      //    from: '0x10d38571f50117bb285A6a43FA94e1D27971a481',
      //    value:web3.utils.toWei(vendors_payment,"ether")
      //  })
      //console.log(etherValue)
     // const state_transfer_update = await instance.methods.request_Funds_to_CG(amountToSend,'0x04bE43F707673D690e75432Ad88A3a51c1CE57B4').send(from)
    // var send = await instance.methods.funds_To_SG().call({ from:this.state.address }).then(res =>{console.log('success')})
    // ,to:'0x04bE43F707673D690e75432Ad88A3a51c1CE57B4', value:etherValue
   
      
        }
      constructor(props){
        super(props)
        this.state = {
          account : '',
          address :'',
          name :[],
          bid:[],
          loading:true,
          result:''
          }
        }





  render(){
  return (
    <div className='Father'>
    <Router>
      {/* <Stategov/> */}
      

      <Switch>
    .. <Route exact path="/stategov/Home" component={Stategov} />
      <Route exact path="/central/Home" component={central} />
      <Route path='/contractor/Home' component={contractor}/>
      </Switch>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={CreateUser} />
        <Route  exact path="/form" component={Lower}/>
      </Switch>
      </div>
      
    </Router>
    </div>
  
  );
 
}
}
export default App;
