import React from 'react';
import Grid from '@material-ui/core/Grid';
import './CSS/Dashboard.css'
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
    width:450 ,
    height:230,
    borderRadius:10,
    display:'flex',
    verticalAlign:'middle',
    alignItems:'center',
    justifyContent:'center',
    justifyItems:'center'
    // position:'relative'
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
    fontSize:30,
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

  }



});
    function Dashboard(props) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
    console.log('AJAAAA')
    console.log(props.item)

    
  





    const handleClick=e=>{props.history.push('/contractor/'+props.route) }
    // const {}
    // const {_id,category_name,category_amount}=props.item
    // console.log(category_name)
    // console.log(props.color)
  return (
    <div onClick={handleClick}> 
    {/* <div className={classes.head}>FIELD NAME</div> */}
    <Card className={classes.root} 
    style={{background:' linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',fontFamily: 'Montserrat'}}   >
    
      <CardContent style={{textAlign:'center'}} >
        <div className={classes.centreText}>{props.item}<hr></hr></div>
      </CardContent>
  
    </Card>
    </div>
  );
}


export default withRouter(Dashboard)
