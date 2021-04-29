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
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.project_details.project_name}
          </TableCell>
          <TableCell >{row.category}</TableCell>
          <TableCell>{row.from.from_state}</TableCell>
          <TableCell>{row.from.from_name}<p>{row.from.from_posit}</p></TableCell>
          <TableCell >{row.to.to_name}<p>{row.to.to_posit}</p></TableCell>
          <TableCell >Rs.{row.amount}</TableCell>
          <TableCell>{JSON.stringify(row.date).substring(1,10)}</TableCell>
         
        </TableRow>
  
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h7" gutterBottom component="div">
                 Transaction Description:
                </Typography>
                {row.desc}
            
                
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  Row.propTypes = {
    row: PropTypes.shape({
      project_name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      from_state: PropTypes.string.isRequired,
      from_name:PropTypes.string.isRequired,
      from_posit:PropTypes.string.isRequired,
      to_name:PropTypes.string.isRequired,
      to_posit:PropTypes.string.isRequired,
      amount:PropTypes.number.isRequired,
      date:PropTypes.string.isRequired,
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
  
  

function TransactionsTable() {

    const [datax,updatedata]=React.useState([]);
    const [condition,updatecondition]=React.useState(true);
   
    useEffect(() => {
      // let zz=[]
      console.log(condition)
        if(condition===true){
        axios.get('http://localhost:5000/transaction/')
        .then(response => {
          
          console.log(datax)
        updatedata(response.data)
          updatecondition(false);
          
          }).catch(()=>console.log('Then Unsuccessful'))
          
         
         }
       
      
       }
      
      )


    return (
        <div>
          



              All transactions
    <TableContainer component={Paper}>
      
      
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Project name</TableCell>
            <TableCell>Project Category</TableCell>
            <TableCell>Project State</TableCell>
            <TableCell>From </TableCell>
            <TableCell>To</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell >Date</TableCell>
            {/* <TableCell align="right">Bid end date</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          
          {datax.map((row) => {
   
            // console.log(row.project_details.project_name)
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

export default TransactionsTable
