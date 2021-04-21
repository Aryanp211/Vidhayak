import React, { Component } from 'react';
import axios from 'axios';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InitForm from './InitForm'



// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     // backgroundColor:,
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// //   select:{
// //    backgroundColor: "white",
// //   }
// }));



// const Initform = props=>(
  
  
//   <form  className={props.classes.form} noValidate>


//   <TextField
//     variant="outlined"
//     type='number'
//     margin="normal"
//     required
//     fullWidth
//     id="email"
//     label="Email"
//     name="email"
//     // onChange={(e)=>handleEmailChange(e.target.value)}
//     autoComplete="email"
//     autoFocus
//   />

//   <TextField
//     variant="outlined"
//     margin="normal"
//     required
//     fullWidth
//     name="password"
//     label="Password"
//     type="password"
//     id="password"
//     // onChange={(e)=>handlePassChange(e.target.value)}
//     autoComplete="current-password"
//   />
// </form>
// )






const Pendingrequest = props => 
  
   (
  <tr>
    <td>{props.pendingrequest.username}</td>
    <td>{props.pendingrequest.req_Projname}</td>
    {/* <td>{props.pendingrequest.req_state}</td> */}
    {/* <td>{props.pendingrequest.req_category}</td> */}
    <td>{props.pendingrequest.req_description}</td>
    <td>{props.pendingrequest.req_duration}</td>

    <td>{props.pendingrequest.req_amount}</td>
    <td>{props.pendingrequest.req_date.substring(0,10)}</td>
    <td>{props.pendingrequest.req_status}</td>
    <td>

<button className="btn btn-primary mx-1" 
onClick={
    () => { 
      
      props.updaterequest(props.pendingrequest._id)}}>
        Initialise Project
  </button>
  
</td>
{/* <div>
<InitForm open={props.open}></InitForm></div> */}
  </tr>
  
  
)


class PrintAuthTable extends Component {
  constructor(props) {
    super(props);
    this.updaterequest = this.updaterequest.bind(this)
    this.state = {
      pendingrequests: [],
      init:false,
      send_id:0,
      // open:false,
      category:this.props.history.location.state.category,
      statename:this.props.history.location.state.statename
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
    console.log(this.state.statename)

    const details={
      statename:this.props.statename,
      category:this.props.category
    }
    // let rawUrl = 'http://localhost:5000/requests/finderState/?page=2&limit=3';
    // let parsedUrl = url.parse(rawUrl);
    // let parsedQs = querystring.parse(parsedUrl.query);
  
   
  console.log('') 
    
    var request = {
      params: {
          statename:this.props.history.location.state.statename,
          category:this.props.history.location.state.category
    }
  }
  // http://localhost:5000/state/findAuth/?statename=Maharashtra&category=Agriculture 

  axios.get('http://localhost:5000/states/findAuth/',request)
  .then(response => {
    console.log(response)
    if (response.data.length > 0) {
      console.log('Rajat Gand mara')
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
    // axios.post('http://localhost:5000/states/update/'+id)
    //   .then(response => { console.log(response.data)});
      this.setState({
        init:true,
        send_id:id,
        pendingrequests: this.state.pendingrequests.filter(pc => pc._id !== id)
      })
      // const classes=useStyles()
      // render() {return (<InitForm></InitForm>)} 
    


  }


  pendingrequestList() {
    console.log(this.state.pendingrequests)
    return this.state.pendingrequests.map(allpendingrequestlist => {
      return <Pendingrequest pendingrequest={allpendingrequestlist} updaterequest={this.updaterequest} key={allpendingrequestlist._id}/>;
    })
  }


  render() {
    // let init=false
    return (
        <div>
          <br></br>


          {this.state.init==false? <div>
          <h3>{this.props.history.location.state.category} approved requests:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Leader Name</th>
              <th>Project Name</th>
              {/* <th>State</th> */}
              {/* <th>Category</th> */}
              <th>Project Descript</th>
              <th>Project duration</th>
              <th>Project Amount</th>
              <th>Date</th>
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {this.pendingrequestList()}
          </tbody>
        </table>
        </div>
      :
      
            <InitForm id={this.state.send_id}></InitForm>
          }

      <button className="Register" onClick={()=>{this.props.history.push('stategov/Authorized')}}>Back</button>
      </div>
    )
  }
}

export default PrintAuthTable;