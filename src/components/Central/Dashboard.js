import React from 'react';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { CardHeader } from '@material-ui/core';
import tp1 from './tp1';

const useStyles = makeStyles({
  root: {
    width: 200 ,
    height:150,
    borderRadius:15,
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
    // backgroundColor:'red',
    // position:'relative',
    color:'red'  
  },

  cost:{
    fontSize:30
  }
});
    function Dashboard() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    {/* <div className={classes.head}>FIELD NAME</div> */}
    <Card className={classes.root}>
    
      <CardContent>
            <Grid item container spacing={2}>
              <Grid item container xs direction='column'>
                  
                  <Grid item container xs={12}  justify='center'
                    alignItems='center'>
                      <Grid item xs={8}>Education</Grid>
                      <Grid item xs={4}>1000</Grid>
                  </Grid>

                  <Grid item xs={12} className={classes.cost}>
                      RS.30,000
                      <hr></hr>
                  </Grid>

                  <Grid item container xs={12}>
                  
                      <Grid item xs={4}>Pending</Grid>
                      <Grid item xs={2}></Grid>
                      <Grid item xs={4}>Authorized</Grid>
                    </Grid>  
            </Grid>
          </Grid>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
  );
}


export default Dashboard
