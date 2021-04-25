import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm(props) {
  const [name,handleName]=useState(props.data.user_firstname+' '+props.data.user_lastname)
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Adhar Card /Pan Card Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField 
          required 
          id="cardName" 
          label="Name on card" 
          fullWidth 
          autoComplete="cc-name"
          value={name}
          onChange={e=>handleName(e.target.value)}
          value={name}  
          InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Adhar Number"
            fullWidth
            autoComplete="cc-number"
            value={props.data.user_adhaar}
          InputLabelProps={{
              shrink: true,
            }}/>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Pancard Number"
            fullWidth
            autoComplete="cc-number"
            value={props.data.user_pan}  
          InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>


      </Grid>
    </React.Fragment>
  );
}