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
import PrintAuthTable from './PrintAuthTable'


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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor:,
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





 function InitForm(props) {
  const classes = useStyles();
  
  const [bid,handleBidChange]=useState('')
  const [date,handleDateChange]=useState(new Date())
  const [id,handleId]=useState(props.id)
  const [init,handleInit]=useState(true)
  // let finaldate = date.getDate() + '-' +  (date.getMonth() + 1)  + '-' +  date.getFullYear()
  // const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // }
//   const [posit,handlePositChange]=useState('')
//   const [state,handleStateChange]=useState('')
const handleClick=()=>{
  handleInit(false)
}

  const handleSubmit=e=>{
    e.preventDefault();
    
    let details={
        bid:bid,
        date:date,
        id:id

    }
    // console.log(bid,date,id)
    console.log('DATE')
    console.log(date)
    axios.post('http://localhost:5000/project/initialise/',details)
      .then(r=>{
        console.log('AAAAAAAAAAAAAAAAAAAAAAAa')
      handleInit(false)
      console.log(init)})
    // })
    // console.log(init)

   
    
    
}

    function handleChange(e){
        
    }

  return (

    <div>
    {init===true ?
    <Container component="main" maxWidth="xs">
        
       <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>

          <ReceiptIcon/>
        </Avatar>

        <Typography component="h1" variant="h5">
          Tender Initialisation
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>


          <TextField
            type='number'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bid"
            label="Bid Amount"
            name="bid"
            onChange={(e)=>handleBidChange(e.target.value)}
            autoComplete="bid"
            autoFocus
          />


{/* <TextField
            type='date'
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bid" */}
            {/* // label="Bid Amount"
           
          //   onChange={(e)}
          // > */}



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
        />





{/* </TextField> */}


{/* <TextField
    id="date"
    label="Birthday"
    type="date"
    // format="MM/dd/yyyy"
    // defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChange={(date)=>handleDateChange(date)}
  /> */}



{/* <MuiPickersUtilsProvider> */}
      {/* <Grid container justify="space-around"> */}
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider> */}



        <div>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
        Submit
          </Button>

          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
        Cancel
          </Button>

        </form>
      </div>    
    </Container>
    :
      <PrintAuthTable init={init}></PrintAuthTable>
      
      }
</div>
  );
}



export default withRouter(InitForm);