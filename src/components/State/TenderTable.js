import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useEffect } from "react";
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
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { withRouter } from 'react-router';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(project_details, tender_amount, tender_date) {
  return {
    project_details,
    tender_amount,
    tender_date,
    
    // history: [
    //   { date: '2020-01-05', customerId: '11091700', amount: 3 },
    //   { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    // ],
  };
}

function Row(props) {
  let history = useHistory();
  let row = props.row;
  let condition=props.condition
  
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  // const [onClick,handleTerminate]=React.useState(false);


  const handleTerminate=e=>{
    console.log(e)
    props.condition(true)
    axios.post('http://localhost:5000/project/terminatetender',{e}).then(r=>{
      console.log("---------------------------------------------------------")
      console.log(r.data)
    })
    
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        {/* <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
        <TableCell component="th" scope="row">
          {row.req_Projname}
        </TableCell>
        <TableCell >{row.req_category}</TableCell>
        <TableCell >{row.req_duration}</TableCell>
        <TableCell >{row.req_amount}</TableCell>
        <TableCell >{row.project_status}</TableCell>
        <TableCell>{row.total_bids.length}</TableCell>
        <TableCell align="right">  
        
        <Button variant="contained" color="secondary"   onClick={function(){handleTerminate(row._id)}}>Terminate Bidding</Button>
        </TableCell>
      </TableRow>

      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h7" gutterBottom component="div">
               Description:
              </Typography>
              {row.req_description}
              {row._id}
              <TableRow>
              <Button variant="contained" color="secondary" onClick={()=>history.push('/contractor/Bidform',{proj_id:row._id})}> Place Bid</Button>
              </TableRow>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    req_Projname: PropTypes.string.isRequired,
    req_category: PropTypes.string.isRequired,
    req_state: PropTypes.string.isRequired,
    req_duration: PropTypes.string.isRequired,
    num_bidders: PropTypes.string.isRequired,
    req_amount:PropTypes.number.isRequired,
    project_status:PropTypes.string.isRequired,
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



function TenderTable(props) {

    const [datax,updatedata]=React.useState([]);
    const [condition,updatecondition]=React.useState(true);

    useEffect(() => {
      // let zz=[]
      console.log(condition)
        if(condition===true){
        axios.get('http://localhost:5000/project/tenders/'+props.statename)
        .then(response => {
          
          console.log(datax)
        updatedata(response.data)
        console.log(datax)
          console.log("Hi this is avalaibe tenders list")
          updatecondition(false);
          
          }).catch(()=>console.log('Then Unsuccessful'))
          
         
         }
       
      
       }
      
      )


    return (
        <div>
             Initialised Tenders
    <TableContainer component={Paper}>
      
      
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {/* <TableCell /> */}
            <TableCell>Project name</TableCell>
            <TableCell>Project Category</TableCell>
            <TableCell>Project duration</TableCell>
            <TableCell>Allocated Amount</TableCell>
            <TableCell>Project Status</TableCell>
            <TableCell >No. of bidders</TableCell>
            {/* <TableCell align="right">Bid end date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
          {datax.map((row) => {
   
            console.log(row.req_Projname)
            return (
              <Row key={row._id} row={row} condition={updatecondition} />
            )
           
          })}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default withRouter(TenderTable)