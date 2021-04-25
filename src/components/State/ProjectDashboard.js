import React from 'react';
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

import rupee from '../icons/rupee.svg'


const useStyles = makeStyles({
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


  head:{
    backgroundColor:'red',
    position:'relative',
    color:'red' ,
  },

centreText:{
    fontSize:15,
    top:32,
    position:'relative'
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
    //   fontFamily:
  }



});
    function ProjectDashboard(props) {
  const classes = useStyles();
  
    console.log('AJAAAA')
    console.log(props.item)

    
  





    const handleClick=e=>{props.history.push('/contractor/'+props.route) }
    
  return (
    <div > 
        


<Grid container xs={12} sm={12}>


    <Grid item xs={3}>
    <Card className={classes.root} 
    // style={{backgroundColor:props.color}}
      >
    
      <CardContent style={{textAlign:'center'}} >
          <div className={classes.text}>35,50,098</div>
        <div className={classes.centreText}> TOTAL MONEY ALLOCATED  </div>
      </CardContent>
  
    </Card>
    </Grid>




    <Grid item xs={3}>
    <Card className={classes.root} 
  
     >
    
      <CardContent style={{textAlign:'center'}} >
      <div className={classes.text}>35,50,098</div>
        <div className={classes.centreText}>EXPENDITURE</div>
      </CardContent>
  
    </Card>
    </Grid>



    <Grid item xs={3}>
    <Card className={classes.root} 
    // style={{backgroundColor:props.color}} 
     >
    
      <CardContent style={{textAlign:'center'}} >
      <div className={classes.text}>35,50,098</div>
        <div className={classes.centreText}>TOTAL TRANSACTIONS</div>
      </CardContent>
  
    </Card>
    </Grid>




    <Grid item xs={3}>
    <Card className={classes.root} 
    // style={{backgroundColor:props.color}} 
     >
    
      <CardContent style={{textAlign:'center'}} >
          <div className={classes.text}>Nagpur</div>
        <div className={classes.centreText}>PLACE</div>
      </CardContent>
  
    </Card>
    </Grid>

















</Grid>

    </div>
  );
}


export default withRouter(ProjectDashboard)
