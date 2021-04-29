import { Component } from 'react';
import Request from './StateRequest';
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./navstate.component";
import Login from '../Login/login.component';
import Maharashtra from './Logos/Maharashtra.svg';
import Gujarat from './Logos/Gj.svg'
import AndhraPradesh from './Logos/Andhra-Pradesh.svg'
import Kerala from './Logos/kerala.png'
import Jharkhand from './Logos/jharkhand.png'
import Goa from './Logos/goa.png'
import Mizoram from './Logos/mizroam.png'

import UttarPradesh from './Logos/Up.png'
import Emblem from './Logos/Emblem.svg';
import Chhattisgarh from './Logos/chhattisgarh.png'
import MadhyaPradesh from './Logos/mp.png'

import Add from './Logos/Add';
import './Logos/Style/logos.css';

import {Container, makeStyles} from '@material-ui/core'
import StateNavbar from './StateNavbar';

import Home from './Home'
import Authorized from'./Authorized'
import PrintAuthTable from './PrintAuthTable';
import InitForm from './InitForm';
import Tenders from './Tenders';
import OngoingProjects from './OngoingProjects';

import Projectinfo from './projectinfo';
import Pending from './Pending';
import Statealltransaction from './Statealltransaction';
import PrintPendingTable from './PrintPendingTable';
// import Emblem from 'src\Logos\Emblem'
//import ShowCrimetype from './components/crimetype.component';

const userStyles=makeStyles((theme)=>({
  root:{
    width:'100vw',
    // height:'10vh',
    // textAlign:'center',
    
    // backgroundColor:theme.palette.grey[300],
    paddingTop:theme.spacing(1),

  },
}))


function Stategov(props){
 let state=JSON.stringify(props.history.location.state.state);
let icon={'Andhra Pradesh':AndhraPradesh,

// 'Arunachal Pradesh':ArunachalPradesh,

// 'Assam':Assam,

// 'Bihar':Bihar,

// 'Karnataka':Karnataka,

'Kerala':Kerala,

'Chhattisgarh':Chhattisgarh,

'Uttar Pradesh' :UttarPradesh, 
'Goa':Goa,

'Gujarat':Gujarat,

// 'Haryana':Haryana,

// 'Himachal Pradesh':HimachalPradesh,

// 'Jammu and Kashmir':JammuandKashmir,


'Jharkhand':Jharkhand,

// 'West Bengal':WestBengal,  
 'Madhya Pradesh':MadhyaPradesh,

'Maharashtra':Maharashtra,

// 'Manipur':Manipur,

// 'Meghalaya':Meghalaya,

'Mizoram':Mizoram,

// 'Nagaland':Nagaland,

// 'Orissa':Orissa,  'Punjab':Punjab,

// 'Rajasthan':Rajasthan,


// 'Sikkim':Sikkim,


// 'Tamil Nadu':TamilNadu,

// 'Telangana':Telangana,


// 'Tripura':Tripura,

// 'Uttarakhand':Uttarakhand,   'Andaman and Nicobar':AndamananNicobar,
// 'Pondicherry':Pondicherry,
// 'Dadra and Nagar Haveli':DadraandNagarHaveli,
// 'Daman and Diu':DamanandDiu,
// 'Delhi':Delhi,
// 'Chandigarh':Chandigarh,
// 'Lakshadweep':Lakshadweep ,}
}
 console.log(state)



 const classes=userStyles() 
const data=props.history.location.state.data
const statename=props.history.location.state.state
console.log('----');
console.log(statename)
  return (
     <Router>
       <div className="main">
       <header className='StateHeader'>

       <Container className={classes.root} disableGutters>
    <div className='state'>
        <div className='StateLogodiv' >
     <img src={icon[props.history.location.state.state]} className='StateLogo' alt="svg" ></img>
        </div>

        <h1 className='StateName'>
       {props.history.location.state.state}
       </h1>

         <div className='Emblemdiv'>
           <img src={Emblem} className='Emblem'></img>
           </div>
           </div>

           
          
           </Container>
       </header>

      
       <StateNavbar></StateNavbar>
      
       {/* {props.history.location.state.state} */}
         <Switch>
         <div className="CentralContainer container"> 
       {/* <Route exact path="/" component={Login} /> */}
       <Route path="/stategov/Home" render={(props)=>(<Home {...props} data={data}/>)}/>
       <Route path="/stategov/Request" render={(props)=>(<Request {...props} data={data}/>)}/>
       <Route path="/stategov/Authorized" render={(props) => (
    <Authorized {...props} statename={statename} />
  )} />





    <Route path="/stategov/PrintPendingTable" component={PrintPendingTable}/>
    <Route path="/stategov/PrintAuthTable" component={PrintAuthTable} />
    <Route path="/stategov/Initialise" component={InitForm} />
    <Route path="/stategov/projectinfo" component={Projectinfo} />
    <Route path="/stategov/OngoingProjects" render={(props) => (
    <OngoingProjects {...props} statename={statename} />
  )} />
    <Route path="/stategov/Tenders" render={(props) => (
    <Tenders {...props} statename={statename} />
  )} />

<Route path="/stategov/alltransaction" render={(props) => (
    <Statealltransaction {...props} statename={statename} />
  )} />


<Route path="/stategov/Pending" render={(props) => (
    <Pending {...props} statename={statename} />
  )} />


       {/* <Route path="/user/crimestat" component={ShowCrimetype} /> */}
       <Route exact path="/" component={Login} />
       </div>
       </Switch>
       </div>
      
     </Router>
    
  );
}

export default Stategov;