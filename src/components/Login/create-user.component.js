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



export default function Login(props) {
  const classes = useStyles();

  const [email,handleEmailChange]=useState('')
  const [password,handlePassChange]=useState('')
  const [firstname,handleFirstnameChange]=useState('')
  const [lastname,handleLastnameChange]=useState('')
  const [dob,handleDobChange]=useState('')
  const [mobilenumber,handleMobilenumberChange]=useState(0)
  const [gender,handleGenderChange]=useState('')
  const [address1,handleAddress1Change]=useState('')
  const [zip,handleZipChange]=useState('')
  const [city,handleCityChange]=useState('')
  const [state,handleStateChange]=useState('')
  const [company,handleCompanyChange]=useState('')
  const [adhaar,handleAdhaarChange]=useState(0)
  const [pan,handlePanChange]=useState(0)
  const [verify,handleVerifyChange]=useState(false)

  const handleSubmit=e=>{
    e.preventDefault();
    let details={
      user_email:email,
      user_password:password,
      user_firstname:firstname,
      user_lastname:lastname,
      user_dob:dob,
      user_mobile:mobilenumber,
      user_gender:gender,
      user_address:address1,
      user_city:city,
      user_company:company,
      user_zipcode:zip,
      user_state:state,
      user_adhaar:adhaar,
      user_pan:pan
    }
    axios.post('http://localhost:5000/user/add/',details)
    .then(r=>{console.log(r,'User added');
          props.history.push('http://localhost:5000/')
  })
    
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
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Create New Account
        </Typography>

        <Typography component="h9" variant="h9">
          Only for Contractor Accounts
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form}  noValidate>


        <Grid container spacing={3}>

        <Grid item xs={12} sm={12}>
              <div style={{textAlign:'center'}}>
              <Link href="http://localhost:3000/" variant="body2">
                {"Already have an account? Log In"}
              
              </Link>
              </div>
            </Grid>

          <Grid xs={12} sm={12}><div>* Required Fields</div></Grid>
          
          <Grid item xs={12} sm={6}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={(e)=>handleEmailChange(e.target.value)}
            autoComplete="email"
            
          />
          </Grid>


          <Grid item xs={12} sm={6}>
          <TextField
          required
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e)=>handlePassChange(e.target.value)}
            autoComplete="current-password"
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

        <Grid item xs={12} sm={6}>
        <TextField
        required
        variant='outlined'
          id="date"
         label="DOB"
         type="date"
         fullWidth
   
             onChange={(e)=>handleDobChange(e.target.value)}
             InputLabelProps={{
            shrink: true}}
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


        <Grid item xs={6} sm={6} >
          <FormControl component="fieldset"  >
          
          <div  >
          {/* <Grid item xs={4} > */}
      <FormLabel component="legend">Gender</FormLabel> 
      {/* </Grid> */}
      <RadioGroup aria-label="gender" name="gender1" style={{flexDirection:'row'}}
      //  value={value} onChange={handleChange}
       >
          <FormControlLabel value="female" control={<Radio />} label="Female" 
          onChange={(e)=>handleGenderChange(e.target.value)} />
      
          <FormControlLabel value="male" control={<Radio />} label="Male" 
          onChange={(e)=>handleGenderChange(e.target.value)}/>
      
          <FormControlLabel value="other" control={<Radio />} label="Other" 
          onChange={(e)=>handleGenderChange(e.target.value)}/>
      
      </RadioGroup>
      </div>
      

    </FormControl>  </Grid>
          
               
        <Grid item xs={12}>
          <TextField
            required
            variant='outlined'
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={(e)=>handleAddress1Change(e.target.value)}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="company"
            name="company"
            label="Company"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={(e)=>handleCompanyChange(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={(e)=>handleCityChange(e.target.value)}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <TextField
            required
            variant='outlined'
            id="zipcode"
            name="zipcode"
            label="Zip Code"
            fullWidth
            autoComplete="shipping address-level2"
            onChange={(e)=>handleZipChange(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
         
<FormControl required variant="filled" className={classes.formControl} fullWidth >
                  
                  <InputLabel htmlFor="filled-age-native-simple">State</InputLabel>
                  <Select 
                  native
                  // fullWidth
                  
                    // menuPlacement = 'bottom'
                    onChange={(e)=>handleStateChange(e.target.value)}
                    inputProps={{
                      name: 'State',
                      id: 'filled-age-native-simple',
                    
                    //   bottom: auto,
                    }}
                  >
                      <option aria-label="None" value="" />
                    {
                    States.map(function(st){
                        return <option
                        value={st}>{st}</option>
                    })
                }
                    
                  </Select>
                </FormControl>
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
            control={<Checkbox color="secondary" name="saveAddress" />}
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
            Create Account
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