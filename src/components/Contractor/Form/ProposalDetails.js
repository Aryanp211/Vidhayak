import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DatePicker } from '@material-ui/pickers';
import Proposal from '../Proposal'
import { PlaceRounded } from '@material-ui/icons';
import axios from 'axios';

export default function ProposalDetails(props) {

  const [proposal,handleProposal]=useState('');
  const [plan,handlePlan]=useState('');
  const [bidamount,handleBidAmount]=useState(0);
  const [date, handleDate]=useState(new Date())
  const [verify, handleVerify]=useState(false)



    const details={
      proposal:proposal,
      plan:plan,
      bidamount:bidamount,
      date:date,
      user_id:props.data._id,
      proj_id:props.proj_id
      
    }

  const toggleVerify=()=>{
    if(verify===true){
      handleVerify(false)
      console.log('Post Nahi hoga')
    }
    else{
      handleVerify(true);
      console.log('Post hoga')
      console.log(details)
      axios.post('http://localhost:5000/contractor/filetender/',details)
    }
  }






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
            value={proposal}
            onChange={e=>handleProposal(e.target.value)}
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
            value={plan}
            onChange={e=>handlePlan(e.target.value)}
          />
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="amount"
            name="bid amount"
            label="Enter the Bid Amount"
            fullWidth
            autoComplete="shipping address-level2"
            value={bidamount}
            onChange={e=>handleBidAmount(e.target.value)}
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
        <TextField
          id="date"
         label="Date"
         type="date"   
         fullWidth         
            InputLabelProps={{
            shrink: true}}
          value={date}
          onChange={e=>handleDate(e.target.value)}
        />
        </Grid>
    
      
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" onChange={toggleVerify} />}
            label="Verify the proposal details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}