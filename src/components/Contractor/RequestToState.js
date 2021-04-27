import React,{useState} from 'react';
// import 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import DatePicker from 'react-datepicker';
import DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {withRouter} from 'react-router-dom'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

// import PrintAuthTable from './PrintAuthTable'


// let email=''
// let password=''
// let posit=''


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright Â© '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }




const useStyles = makeStyles((theme) => ({

  container:{
      maxWidth:600,
    
  },


  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white',

    padding:20,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));





 function RequestToState(props) {
  const classes = useStyles();
  console.log(props)
  const statename=props.history.location.state.details.project_state;
  const project_name=props.history.location.state.details.project_name;
  const project_id=props.history.location.state.details.project_id;
  const request_amount=props.history.location.state.request_amount;
  const user_firstname=props.data.user_firstname;
  const user_lastname=props.data.user_lastname;
  const contractor_id=props.data._id;


  const [date,handleDateChange]=useState(new Date())
  const [description,handleDescription]=useState('')
  
  // let finaldate = date.getDate() + '-' +  (date.getMonth() + 1)  + '-' +  date.getFullYear()
  // const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // }
//   const [posit,handlePositChange]=useState('')
//   const [state,handleStateChange]=useState('')


  const handleSubmit=e=>{
    e.preventDefault();
    
    let details={
        project_id:project_id,
        date:date,
        project_name:project_name,
        request_amount:request_amount,
        contractor_id:contractor_id,
        contractor_firstname:user_firstname,
        contractor_lastname:user_lastname,
        description:description
    }
    // console.log(bid,date,id)
    console.log('DATE')
    console.log(date)
    axios.post('http://localhost:5000/contractor/RequestToState/',details)
      .then(r=>{
        console.log('Requesting State')
    })

   
    
    
}

const handleClick=()=>{
    props.history.push('/contractor/projectinfo')
}

    function handleChange(e){
        
    }

  return (

    <div>
    
    <Container component="main" className={classes.container}>
        
       <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>

          {/* <ReceiptIcon/> */}
          <AccountBalanceWalletIcon/>
        </Avatar>

        <Typography component="h1" variant="h5">
          {project_name}
        </Typography>
        <Typography component="h6" variant='h9'>
            Request To Govt. of {statename}
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>

        <Grid container 
  alignItems="center" spacing={2}>

        
        <Grid item xs={6}>
          <TextField
            type='text'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bid"
            label="First Name"
            name="bid"
            value={user_firstname}
            // onChange={(e)=>handleBidChange(e.target.value)}
            autoComplete="bid"
            // autoFocus
          />
</Grid>

<Grid item xs={6}>
          <TextField
            type='text'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bid"
            label="Last Name"
            name="bid"
            value={user_lastname}
            // onChange={(e)=>handleBidChange(e.target.value)}
            autoComplete="bid"
            // autoFocus
          />
</Grid>


<Grid item xs={6}> <TextField
            type='number'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bid"
            label="Amount"
            name="bid"
            value={request_amount}
            // onChange={(e)=>handleBidChange(e.target.value)}
            autoComplete="bid"
            // autoFocus
          /></Grid>


<Grid item xs={6}> <TextField
            type='date'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bid"
            label="Date"
            name="bid"
            // onChange={(e)=>handleBidChange(e.target.value)}
            autoComplete="bid"
            onChange={(e)=>handleDateChange(e.target.value)}
             InputLabelProps={{
            shrink: true}}
            // autoFocus
          /></Grid>



          <Grid item xs={12}>
              <TextField
                type='textfield'
                variant='outlined'
                margin="normal"
                fullWidth
                label='Description'
                onChange={e=>handleDescription(e.target.value)}/>
          </Grid>

{/* 
<TextField
        required
        variant='outlined'
          id="date"
         label="Date"
         type="date"
         fullWidth
   
             onChange={(e)=>handleDateChange(e.target.value)}
             InputLabelProps={{
            shrink: true}}
        /> */}


<Grid item xs={6}><Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
        Cancel
          </Button>
          </Grid>

<Grid item xs={6}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
        Submit
          </Button>
          </Grid>

          
          </Grid>
        </form>
      </div>    
    </Container>
    
</div>
  );
}



export default withRouter(RequestToState);