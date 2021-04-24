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


}));



export default function Login(props) {
  const classes = useStyles();

  const [email,handleEmailChange]=useState('')
  const [password,handlePassChange]=useState('')
  const [posit,handlePositChange]=useState('')
  const [state,handleStateChange]=useState('')

  const handleSubmit=e=>{
    e.preventDefault();
    console.log(email,password,posit,state)
    if (posit==='Central'){
        props.history.push('/central/Home')
    }
    else if (posit==='Contractor'){
      props.history.push('/contractor/Home')
    }

    else{
        props.history.push('/stategov/Home',{state:state})
    }
    
}



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} noValidate>


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
            autoFocus
          />

          <TextField
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


        <FormControl component="fieldset">
      {/* <FormLabel component="legend">labelPlacement</FormLabel> */}
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        {/* <FormControlLabel
          value="top"
          control={<Radio color="primary" />}
          label="Top"
          labelPlacement="top"
        /> */}


<FormControlLabel
          value="Contractor"
          control={<Radio color="primary" />}
          label="Contractor"
          name='posit'
          onChange={(e)=>handlePositChange(e.target.value)}
          labelPlacement="start"
        />        



    <FormControlLabel
          value="State"
          control={<Radio color="primary" />}
          label="State"
          name='posit'
          onChange={(e)=>handlePositChange(e.target.value)}
          labelPlacement="start"
        />

    <FormControlLabel
          value="Central"
          control={<Radio color="primary" />}
          label="Central"
          name='posit'
          onChange={(e)=>handlePositChange(e.target.value)}
          labelPlacement="start"
        />
        {/* <div> */}
        </RadioGroup>
        
        {posit==='State'?
        <div>
                  <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-age-native-simple">State</InputLabel>
                  <Select backgroundColor='red'
                  native
                  
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
                    
                    {/* <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option> */}
                  </Select>
                </FormControl>
                </div>
          :
            null

        }
        



        {/* <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        /> */}
        {/* <FormControlLabel value="end" control={<Radio color="primary" />} label="End" /> */}
      
    </FormControl>
        <div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}

          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="http://localhost:3000/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        {/* <Copyright /> */}
    </Container>
  );
}