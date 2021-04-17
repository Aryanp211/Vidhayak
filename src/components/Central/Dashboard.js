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
import tp1 from './tp1';
import rupee from '../icons/rupee.svg'


const useStyles = makeStyles({
  root: {
    width: 260 ,
    height:175,
    borderRadius:10,
    
    
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
    // const {}
    const {_id,category_name,category_amount}=props.item
    console.log(category_name)
    console.log(props.color)
  return (
    <div>
    {/* <div className={classes.head}>FIELD NAME</div> */}
    <Card className={classes.root} style={{backgroundColor:props.color}} >
    
      <CardContent>
            <Grid item container spacing={2} alignItems='center' justify='center'>
              <Grid item container xs direction='column' alignItems='center' justify='space-around'>
                  
                  <Grid item container xs={12}  justify='center'
                    alignItems='center'>
                      <Grid item xs={8}><div className='Category'>{props.item.category_name}</div></Grid>
                      <Grid item xs={4}><div className='TotalAlloc'>{props.item.category_amountAlloc}</div></Grid>
                      
                  </Grid>
                  

                  <Grid item container xs={12} 
                    alignItems='center' justify='center' className={classes.cost}>
                  
                      {/* <hr className='hrTag'></hr> */}
                      {/* <Grid item xs={12} 
                        alignItems='right'
                        justify='right'
    
                      > */}
                      <div>
                      <img src={rupee} className='RupeeIcon'></img> 
                      {/* </Grid> */}
                      {/* <Grid item xs={8} className={classes.cost}> */}
                      {props.item.category_amount}</div></Grid>
                      
          

                  <Grid item container xs={12}  className={classes.PendingAuth}>
             
                  <Grid item xs={5}><div className='PendingDiv' id='Attributes'>Pending</div></Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5} ><div className='AuthDiv' id='Attributes' >Authorized</div></Grid>
                  
                </Grid>  


                  <Grid item container xs={12} alignItems='center' justify='center'>
                  
                  <Grid item xs={5}><div className='PendingNum' id='SmallNum'>{props.item.category_pending}</div></Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={5}><div className='AuthNum' id='SmallNum'>{props.item.category_authorized}</div></Grid>
                </Grid>  

                  
            </Grid>
          </Grid>
      </CardContent>
  
    </Card>
    </div>
  );
}


export default Dashboard
