import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PendingRequest from './PendingRequest';
import { BrowserRouter as Router, Link, Route,Switch} from "react-router-dom";
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class CentralCard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      clicked:false,
      category:this.props.category,
      status:this.props.status,
      count:0
       
  }
  }
  

  componentDidMount() {




    if(this.state.status==='Authorized'){
      axios.get('http://localhost:5000/requests/finderAuth/'+this.props.category)
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
    axios.get('http://localhost:5000/requests/finderState/'+this.props.category)
    .then(response => {
     this.setState({
       count:response.data.length
     })
    })
    .catch((error) => {
      console.log('hahahaha');
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
  return (
    <div>
    <Card className='f' variant="outlined" >
     <header onClick={()=>{

     if (this.state.status==='Authorized'){
      this.props.history.push('/alltransaction',{name:this.state.category})}
     
     
     else if (this.state.status==='Pending'){
      this.props.history.push('/PendingRequest',{name:this.state.category})
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

export default withRouter(CentralCard)


// render={(props) => <PendingRequest {...props}/>} 