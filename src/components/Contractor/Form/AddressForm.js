import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {


// const [verify,handleVerify]=useState(false);
// const toggleVerify=()=>{
//   if (verify===true){
//     handleVerify(false)
//   }
//   else
//   handleVerify(true)
// }
  console.log('Address Form')
  console.log(props.data.user_email)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={props.data.user_firstname}
            // placeholder={props.data.user_firstname}
            fullWidth
            autoComplete="given-name"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            value={props.data.user_lastname}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            value={props.data.user_address}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            value={props.data.user_city}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="state" 
          name="state" 
          label="State/Province/Region" 
          fullWidth 
          value={props.data.user_state}  
          InputLabelProps={{
              shrink: true,
            }}/>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            value={props.data.user_zipcode}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
    
        </Grid>
        <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress"  />}
            label="Verify the personal details"
          />
    </React.Fragment>
  );
}