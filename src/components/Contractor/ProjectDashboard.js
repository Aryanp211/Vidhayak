import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
// import './CSS/Dashboard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { CardHeader } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import { useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import axios from 'axios';

import rupee from '../icons/rupee.svg'


const useStyles = makeStyles((theme)=>({
  

  tablerow: {
    '& > *': {
      borderBottom: 'unset',
    },
  },

  table: {
    minWidth: 650,
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // maxWidth:100
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:800,
    height:300
  },
  root: {
    width:275,
    height:150,
    borderRadius:10,
    display:'flex',
    background:'linear-gradient(#06beb6,#48b1bf)',
    // verticalAlign:'middle',
    // alignItems:'center',
    justifyContent:'center',
    // justifyItems:'center'
    // position:'fixed'
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },


  title: {
    fontSize: 14,
    // backgroundColor:'red',
    // width: '100%'
  },


  pos: {
    marginBottom: 12,
  },

  grid:{
    overflowX:true,
  },

  head:{
    backgroundColor:'red',
    position:'relative',
    color:'red' ,
  },

centreText:{
    fontSize:15,
    top:8,
    position:'relative',
    fontFamily: 'Montserrat',
    fontWeight:'bold'
    // textDecoration:'underline',
    // textDecorationStyle:'wavy'
},

  cost:{
    fontSize:45,
  },
  pendingNum:{
    textAlign:'right',
  },
  authnum:{
    textAlign:'right',
    fontSize:100,
  },

  // smallfonts:{
  //   fontSize:5,
  //   textAlign:'right'
  // }
  PendingAuth:{
  borderTopStyle:'solid',
  marginTop:14,

  },

  text:{
      marginTop:10,
      fontSize:28,
      fontWeight:'bold',
      fontFamily: 'Montserrat',
  }



}));


    function ProjectDashboard(props) {
  const classes = useStyles();
  
  const[data,handleData]= useState(props.details)
    console.log('AJAAAA')
    // console.log(props.item)

    // useEffect(()=>{
    //   handleData(props.details)

    // })

    
    
  





    const handleClick=e=>{props.history.push('/contractor/'+props.route) }
    // const contractor_name= props.details.contractor_Authorized.contractor_details.contractor_name
    // .contractor_details.contractor_name
    // props.details.contractor_Authorized.contractor_details.contractor_name
    console.log('#######################################################################')
    // console.log('contractor',props.details)
    const [open,setOpen]=useState(false)
   const details=props.details
  const project_state=details.project_state
  const request_amount=55
  const bid_amount=props.details.contractor_Authorized.bid_amount;
  const vendor_requests=props.details.contractor_Authorized.contractor_details.vendor_requests;
  let dueamount=0
  console.log(details)
    // console.log(data)

    const handleRequest=()=>{
      props.history.push('/contractor/request',{details:details,request_amount:request_amount})
    }
    
  return (
    

    <div > 
        


<Grid container xs={12} sm={12} className={classes.grid}>


    <Grid item xs={3}>
    <Card className={classes.root} 
    // style={{backgroundColor:props.color}}
      >
    
      <CardContent style={{textAlign:'center'}} >
          <div className={classes.text}>{bid_amount}</div>
          <hr></hr>
        <div className={classes.centreText}> PROJECT BID AMOUNT  </div>
      </CardContent>
  
    </Card>
    </Grid>




    <Grid item xs={3}>
    <Card className={classes.root} 
  
     >
    
      <CardContent style={{textAlign:'center'}} >
      <div className={classes.text}>35,50,098</div>
      <hr></hr>
        <div className={classes.centreText}>EXPENDITURE</div>
      </CardContent>
  
    </Card>
    </Grid>



  




    <Grid item xs={3}>
    <Card className={classes.root} 
    // style={{backgroundColor:props.color}} 
     >
    
      <CardContent style={{textAlign:'center'}} >
          <div className={classes.text}>Nagpur</div>
          <hr></hr>
        <div className={classes.centreText}>PAYMENT DUE</div>  
        {/* Request from Vendors */}
      </CardContent>
  
    </Card>

    </Grid>


    
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> */}


<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell/>
            <TableCell align="right">FROM</TableCell>
            <TableCell align="right">JOB TITLE</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          { vendor_requests.filter(i=>i.payment_status==='Pending').map((row) => {
            
            
            // if(reqdata.requests_status==='Pending'){

            
            dueamount+=row.amount
          
            return (

<React.Fragment>
<TableRow className={classes.tablerow}>
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
              {row._id}
              <TableRow>
              <Button variant="contained" color="secondary" onClick={()=>history.push('/contractor/Bidform',{proj_id:row._id})}> Place Bid</Button>
              </TableRow>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      </React.Fragment>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </Fade>
      </Modal>




    <Grid item xs={3}>
    <Card className={classes.root} onClick={handleRequest}
    // style={{backgroundColor:props.color}} 
     >
    
      <CardContent style={{textAlign:'center'}} >
      <div className={classes.centreText}>REQUEST</div>
      <div className={classes.text}>{request_amount}</div>
      <hr></hr>
        <div className={classes.centreText}>TO GOVT OF {(project_state).toUpperCase()}</div>
      </CardContent>
  
    </Card>
    </Grid>











</Grid>

    </div>
  );
}


export default withRouter(ProjectDashboard)
