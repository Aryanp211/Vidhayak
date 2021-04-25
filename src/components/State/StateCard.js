import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import PendingRequest from './PendingRequest';
import { BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { CodeSharp } from '@material-ui/icons';

class StateCard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      clicked:false,
      statename:this.props.statename,
      category:this.props.category,
      status:this.props.status,
      count:0
       
  }
  }
  

  componentDidMount() {




    if(this.state.status==='Authorized'){
        var request = {
            params: {
                statename:this.state.statename,
                category:this.state.category
          }
        }
      axios.get('http://localhost:5000/states/findAuth/',request)
      .then(response => {
       this.setState({
         count:response.data.length
       })
      })
      .catch((error) => {
        console.log('hahahaha');
      })

    }

    else if(this.state.status==='Pending'){
      var request = {
        params: {
            statename:this.state.statename,
            category:this.state.category
      }
    }
    console.log('PENDING')
    console.log(request)
    axios.get('http://localhost:5000/states/findPending/',request)
    .then(response => {
      console.log('inside response')
      console.log(response)
     this.setState({
       count:response.data.length
     })
    })
    .catch((error) => {
      console.log('hahahaha Rajat chutiya');
    })
  }
}

// useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });


  // classes = useStyles();
  //  bull = <span className={classes.bullet}>•</span>;
  
   handleClick=()=>{
    // console.log(e.target.value)
    // if (this.state.click===true){
      this.setState({
        clicked:true
      },
      ()=>console.log(this.state.clicked) 
      )
    // }

    // this.setState({
    //     clicked:true
      
    //     // status:'Pending'
    // })
  // }
  }

  handleClose=()=>{
    
    this.setState({
      clicked:false,
      flag:0
    },
    ()=>console.log(this.state.clicked))
  
    
  }      



  render(){
    console.log('aaaaaaaaaaaaaaaaaa')
    console.log(this.state.statename)
    console.log(this.state.status)
    console.log(this.state.category)
  return (
    <div>
    <Card className='f' variant="outlined" >
     <header onClick={()=>{

     if (this.state.status==='Authorized'){
      this.props.history.push('/stategov/PrintAuthTable',{category:this.state.category,statename:this.state.statename})}
     
     
     else if (this.state.status==='Pending'){
      this.props.history.push('stategov/PrintPendingTable',{category:this.state.category,statename:this.state.statename})
     }
    }
    }>
     {/* {this.state.clicked && this.state.status=='Pending' ?
  <PendingRequest name={this.state.category} /> :
    null

    } */}
    
     
      <CardContent>
        {/* <Typography className='d' color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be bull nev o lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}

        <h1>{this.props.category}</h1>
        <h3>{this.state.status}: {this.state.count}</h3>
      </CardContent>
      </header>

      <CardActions>
      {this.state.clicked?<Button onClick={this.handleClose} size="small">Hide</Button>:null}
        
      </CardActions>


      
    </Card>
</div>



  );
  }
}

export default withRouter(StateCard)


// render={(props) => <PendingRequest {...props}/>} 