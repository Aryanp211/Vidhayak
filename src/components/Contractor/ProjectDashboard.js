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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
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
// import { withRouter } from 'react-router';
import statename from '../States';
import rupee from '../icons/rupee.svg'
// import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
// import { makeStyles ,useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
// import { useEffect } from "react";
// import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import axios from 'axios';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip'
// import { useHistory } from 'react-router-dom'
// import { withRouter } from 'react-router';
import Web3 from 'web3';
import Mycontract from "../contracts/Transactions.json";
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
  const [vendor_requests,handleReqdata]=useState([])




  const classes = useStyles();
  console.log(props.details.project_id)
  
    const handleClick=e=>{props.history.push('/contractor/'+props.route) }
   
    const [open,setOpen]=useState(false)
    const [openq, setOpenq] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

    const handleApprove=e=>{
      let d={
        proj_id:props.details._id,
        request_id:e
    
      }
        axios.post('http://localhost:5000/states/ApproveContractorRequest',d)
        .then(r=>{
          console.log('Request Approved by state')
          // handleCondition(true)
        })
    
    }
   


  let details=props.details
  console.log("hooooo",details)
  let project_state=details.project_state
  let request_amount=55
  let bid_amount=details.contractor_Authorized.bid_amount
  console.log("gekfipoefew",bid_amount)
  const [amountused,handleChangeAmountused]=useState('')
  // const vendor_requests=details.contractor_Authorized.contractor_details.vendor_requests;
  let dueamount=0
  let amountdue=0
  let cnt=0
  console.log(details)
  let description=''
    // console.log(data)

    const handleRequest=()=>{
      props.history.push('/contractor/request',{details:details,request_amount:amountdue,description:description})
      
    }
    
    function handlePayment(e,_amount){
      console.log(e)
      // opprs.condition(true)
      loadBlockChainData(_amount);
      var xx={
        vendor_id:e,
        details:details
      }
      axios.post('http://localhost:5000/contractor/settlepayment',xx).then(r=>{
        console.log(",/,/,/,/,/,/,,,/,/,/,/,/,/,/,/,/,/,/,/,/,,/,/,,/")
        console.log(r.data)
      })

      axios.get('http://localhost:5000/project/details/'+props.details._id)
      .then(res=>{
        details=res.data
        console.log(details)
        // handleCondition(false)
      }
        )
      }



    async function loadWeb3() {
      if(window.ethereum)
      {
        window.web3 = new Web3(window.ethereum)
        await window.ethereum.enable();
      }
      else if(window.web3)
      {
        window.web3 = new Web3(window.web3.currentProvider)
      }
      else
      {
        window.alert('Non-Ethereum browser derected')
      }
    }


    async function loadBlockChainData(_amt){
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts()
      console.log(accounts);
      const id = await web3.eth.net.getId();
      const networkData = Mycontract.networks[id]
      const instance = new web3.eth.Contract(Mycontract.abi, networkData.address)
      //console.log(networkData.address)
      var vendors_payment = _amt;
      const to_vendors = instance.methods.payment_from_Contractor('0x8b2E48DD1189Ade0A322Dcf4ef06cCFAe056eDf2')
      .send({
        from: '0x10d38571f50117bb285A6a43FA94e1D27971a481',
        value:web3.utils.toWei((vendors_payment).toString(),"ether")
      })
          }



    useEffect(()=>{
      loadWeb3();
  //console.log(window.web3);
    //loadBlockChainData();
      // if(condition===true){
      axios.get('http://localhost:5000/project/details/'+props.details._id)
      .then(res=>{
        handleReqdata(res.data.contractor_Authorized.contractor_details.vendor_requests)
        handleChangeAmountused(res.data.contractor_Authorized.contractor_amountused)
      }
        )
    // }
    })
  

  return (
    

    <div > 
        


<Grid container xs={12} sm={12} className={classes.grid}>


    <Grid item xs={3}>
    <Card className={classes.root} 
    // style={{backgroundColor:props.color}}
      >
    
      <CardContent style={{textAlign:'center'}} >
          <div className={classes.text}>{details.contractor_Authorized.contractor_details.project_bidamount}</div>
          <hr></hr>
        <div className={classes.centreText}> PROJECT BID AMOUNT  </div>
      </CardContent>
  
    </Card>
    </Grid>




    <Grid item xs={3}>
    <Card className={classes.root} 
  
     >

      
      <CardContent style={{textAlign:'center'}} >
      <div className={classes.text}>{amountused}</div>
      <hr></hr>
        <div className={classes.centreText}>EXPENDITURE</div>
      </CardContent>
  
    </Card>
    </Grid>



  
    { vendor_requests.filter(i=>i.payment_status==='Pending').map((x) => {
             amountdue+=x.amount
             cnt+=1
             description="\n"+x.reason+" || "+description+"\n"
        })}



    <Grid item xs={3}>
    <Card onClick={handleOpen} className={classes.root } 
    // style={{backgroundColor:props.color}} 
     >
    
      <CardContent style={{textAlign:'center'}} >
          <div className={classes.text}>Rs.{amountdue}/{vendor_requests.filter(i=>i.payment_status==='Pending').length}</div>
          <hr></hr>
        <div className={classes.centreText}>PAYMENT REQUEST DUE</div>  
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
          <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpenq(!openq)}>
            {openq ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell/>
            <TableCell>FROM</TableCell>
            <TableCell>JOB TITLE</TableCell>
            <TableCell>AMOUNT</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(vendor_requests)}
          { vendor_requests.filter(i=>i.payment_status==='Pending').map((row) => {
            
            
           
            dueamount+=row.amount
          
            return (

<React.Fragment>
<TableRow className={classes.tablerow}>
  
      
        {/* <TableCell/> */}
        <TableCell >{row.name}</TableCell>
        <TableCell >{row.jobtitle}</TableCell>
        <TableCell >{row.amount}</TableCell>
        {/* <TableCell >{row.tender_amount}</TableCell> */}
        {/* {console.log(row.tender_date)} */}
        <TableCell align="right">{JSON.stringify(row.date).substring(1,10)}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openq} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h7" gutterBottom component="div">
               Description:
              </Typography>
              {row.reason}
              
              <TableRow>
              <Button variant="contained" color="secondary" onClick={function(){handlePayment(row._id,row.amount)}}>Settle Payment</Button>
              </TableRow>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      </React.Fragment>
          )})}
          <TableRow>
          <TableCell/>
          <TableCell/>
          <TableCell>Toatal Amount</TableCell>
          <TableCell>{dueamount}</TableCell>
          </TableRow>
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
      <div className={classes.text}>{amountdue}</div>
      <hr></hr>
        <div className={classes.centreText}>TO GOVT OF {(props.details.req_state).toUpperCase()}</div>
      </CardContent>
  
    </Card>
    </Grid>











</Grid>

    </div>
  );
}


export default withRouter(ProjectDashboard)