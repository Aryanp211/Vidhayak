import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DatePicker } from '@material-ui/pickers';

export default function ProposalDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter Proposal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Enter the Proposal description"
            name="Enter the Proposal description"
            label="Enter the Proposal description"
            fullWidth
            autoComplete="Enter the Proposal description"
          />
        </Grid>
      
        <Grid item xs={12}>
          <TextField
            required
            id="Proposed Plan of Work"
            name="Proposed Plan of Work"
            label="Proposed Plan of Work"
            fullWidth
            autoComplete="Proposed Plan of Work"
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Enter the estimated amount"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
        <TextField
          id="date"
         label="Birthday"
         type="date"
             // format="MM/dd/yyyy"
            // defaultValue="2017-05-24"
             
             InputLabelProps={{
            shrink: true}}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="country"
            name="country"
            label="Enter the bid amount"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Verify the proposal details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}