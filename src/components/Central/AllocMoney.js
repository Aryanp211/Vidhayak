import React, { Component } from "react";
import categories from "../Categories";
import "./CSS/AllocMoney.css";
import {TextField,Select,MenuItem, Options,InputLabel,IconButton,FormControl} from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from 'axios'



export default function App() {
  const [rs, setRs] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const reque={
      amount:rs
    }
    console.log(category)
    console.log(rs)
    axios.post('http://localhost:5000/central/allocate/'+category,reque)
    .then(()=>console.log('Allocated'))
    .catch(err=>console.log(err))

  }

// app/post('abc/cat=cat', this.state.amount)

  return (
     <div className="AllocateClass">
         
    <form className='AllocForm' onSubmit={handleSubmit}>
      <h1>Allocate</h1>
      {/* <h2>To</h2> */}

        <TextField id="standard-basic" label="Rs." 
          name="rs"
          type="number"
          value={rs}
          onChange={e => setRs(e.target.value)}
          required />

<FormControl>
<InputLabel id="demo-simple-select-label">Category</InputLabel>


<Select
          label='Category'
          id="demo-simple-select"
          name="category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required>
        
          {categories.map(cat => (
            <MenuItem value={cat}  key={cat}>{cat}</MenuItem >
          ))}

</Select>
</FormControl>


<div className='AllocButton'>
  <IconButton type='submit'
    color="primary" 
    aria-label="Allocate" 
    className='AllocateButton'>
    <AddShoppingCartIcon fontSize='large'>
    </AddShoppingCartIcon>
  </IconButton>
</div>

    </form>
    </div>
  );
}