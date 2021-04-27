import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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
import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import States from '../States'
import { BottomNavigationAction } from '@material-ui/core';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Videocam from '@material-ui/icons/Videocam';
import { PostAdd } from '@material-ui/icons';



const styles = (theme) => ({
  input: {
      display: 'none'
  }
}); 

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  container:{
    width:800,
    display:'flex'
  }

}));

 function LowerTransaction(props) {




  console.log(props.id)

  const classes = useStyles();
  const [projectid,handleProjectidChange]=useState('')
  const [firstname,handleFirstnameChange]=useState('')
  const [lastname,handleLastnameChange]=useState('')

  const [mobilenumber,handleMobilenumberChange]=useState(0)
  const [amount,handleAmountChange]=useState(0) 
  const [jobtitle,handleJobtitleChange]=useState('')
  
  const [reason,handleReasonChange]=useState('')
  const [adhaar,handleAdhaarChange]=useState(0)
  const [pan,handlePanChange]=useState(0)
  const [verify,handleVerifyChange]=useState(false)
  // const [photo,setPhoto]=useState('')

  const handleSubmit=e=>{
    e.preventDefault();
    
    let details={
      projectid:projectid,
      firstname:firstname,
      lastname:lastname,
      mobile:mobilenumber,
      jobtitle:jobtitle,
      reason:reason,
      amount:amount,
      adhaar:adhaar,
      pan:pan,
      date:new Date()
    }
    

    console.log(details)
    axios.post('http://localhost:5000/contractor/vendorrequest',details)
    .then(r=>{console.log(r,'Requstedd!!')
          props.history.push('/')
  }).catch(error=>console.log('Did not post'))
    
}



const handleToggleVerify=()=>{
  if (verify===true){
    handleVerifyChange(false)
  }
  else{
    handleVerifyChange(true)
  }
}



  return (
    <Container component="main" className={classes.container} style={{backgroundColor:'white'}}>
      <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <PostAdd/>
        </Avatar>

        <Typography component="h1" variant="h5">
          Create a request to contractor
        </Typography>


        <form onSubmit={handleSubmit} className={classes.form}  noValidate>


        <Grid container spacing={3}>


          <Grid xs={12} sm={12}><div>* Required Fields</div></Grid>
          
         
          <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="Project id"
            name="Project id"
            label="Project id"
            fullWidth
            autoComplete="Project id"
            onChange={(e)=>handleProjectidChange(e.target.value)}
          />
        </Grid>



        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            onChange={(e)=>handleFirstnameChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={(e)=>handleLastnameChange(e.target.value)}
          />
        </Grid>


        <Grid item sx={12} sm={6}>
        <TextField
        required
        variant='outlined'
          id="number"
         label="Mobile No."
         type="number"
         fullWidth
         onChange={e=>handleMobilenumberChange(e.target.value)}
        />

        </Grid>
               
        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="jobtitle"
            name="jobtitle"
            label="jobtitle"
            fullWidth
            autoComplete="jobtitle"
            onChange={(e)=>handleJobtitleChange(e.target.value)}
          />
        </Grid>


        <Grid item sx={12} sm={6}>
        <TextField
        required
        variant='outlined'
          id="Amount"
         label="Amount"
         type="number"
         fullWidth
         onChange={e=>handleAmountChange(e.target.value)}
        />

        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            variant='outlined'
            id="Reason"
            name="Reason"
            label="Reason "
            fullWidth
            autoComplete="Reason"
            onChange={(e)=>handleReasonChange(e.target.value)}
          />
        </Grid>


  
        <Grid item xs={12} sm={6}>
              <TextField
              required
                variant='outlined'
                id="adhaar"
                label="Adhaar No."
                type="number"
                onChange={(e)=>handleAdhaarChange(e.target.value)}
         fullWidth
        />
              </Grid>


              <Grid item xs={12} sm={6}>
              <TextField
              required
                variant='outlined'
                id="pan"
                label="PAN No."
                type="number"
                onChange={(e)=>handlePanChange(e.target.value)}
                fullWidth
               />      
              </Grid>

            


        <Grid item xs={12} sm={12} style={{textAlign:'center'}}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="savejobtitle" />}
            label="I have verified all the mentioned details" onChange={handleToggleVerify}
          />
    
        </Grid>
        <Grid xs={12} sm={12} style={{textAlign:'center'}}>
          <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!verify}
          >
            Place request
          </Button>

          </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        {/* <Copyright /> */}
    </Container>
    
   
  );
}
export default withRouter( LowerTransaction);