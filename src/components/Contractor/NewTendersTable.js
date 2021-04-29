import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles ,useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useEffect } from "react";
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip'
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router';
import statename from '../States';
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



// function createData(project_details, tender_amount, tender_date) {
//   return {
//     project_details,
//     tender_amount,
//     tender_date,
    
//     // history: [
//     //   { date: '2020-01-05', customerId: '11091700', amount: 3 },
//     //   { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     // ],
//   };
// }

function Row(props) {
  let history = useHistory();
  let row = props.row;
  // {console.log(row)}
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.req_Projname}
        </TableCell>
        <TableCell >{row.req_category}</TableCell>
        <TableCell >{row.req_state}</TableCell>
        <TableCell >{row.req_duration}</TableCell>
        <TableCell >{row.tender_amount}</TableCell>
        {/* {console.log(row.tender_date)} */}
        <TableCell align="right">{JSON.stringify(row.tender_date).substring(1,10)}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h7" gutterBottom component="div">
               Description:
              </Typography>
              {row.req_description}
              Project id:{row._id}
              <TableRow>
              <Button variant="contained" color="secondary" onClick={()=>history.push('/contractor/Bidform',{proj_id:row._id})}> Place Bid</Button>
              </TableRow>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    req_Projname: PropTypes.string.isRequired,
    req_category: PropTypes.string.isRequired,
    req_state: PropTypes.string.isRequired,
    req_duration: PropTypes.string.isRequired,
    req_description: PropTypes.string.isRequired,
    tender_amount: PropTypes.number.isRequired,
    tender_date: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    project_details: PropTypes.string.isRequired,
  }).isRequired,
};

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0),
//   createData('Ice cream sandwich', 237, 9.0),
//   createData('Eclair', 262, 16.0),
//   createData('Cupcake', 305, 3.7),
//   createData('Gingerbread', 356, 16.0),
//   {project_details:"Rajat",tender_amount:20,tender_date:233,history: [
//     { date: '2020-01-05', customerId: '11091700', amount: 3 },
//     { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//   ],}
// ];






function NewTendersTable() {
    const [datax,updatedata]=React.useState([]);
    const [condition,updatecondition]=React.useState(true);
 
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      setPersonName(event.target.value);
      updatecondition(true);
    };
  
    const handleChangeMultiple = (event) => {
      const { options } = event.target;
      const value = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setPersonName(value);
    };






    useEffect(() => {
      // let zz=[]
     
        if(condition===true){
        axios.get('http://localhost:5000/project/')
        .then(response => {
          // console.log('dddhdjd')
          // console.log(datax)
          console.log(personName)
        updatedata(response.data)
        // console.log(datax)
          console.log("Hi this is availabe tenders list")
          updatecondition(false);
          
          }).catch(()=>console.log('Then Unsuccessful'))
          
         
        }
       
      
      }
      
      )
   


  return (
  <div>
    
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Select State</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {statename.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>


    <TableContainer component={Paper}>
      
      
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project name</TableCell>
            <TableCell>Project category</TableCell>
            <TableCell>Project state</TableCell>
            <TableCell>Project duration</TableCell>
            <TableCell >Tender Amount</TableCell>
            <TableCell align="right">Bid end date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {datax.map((row) => {
   
            // console.log(row.req_Projname)
            return (
              <Row key={row._id} row={row} />
            )
           
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default withRouter (NewTendersTable)