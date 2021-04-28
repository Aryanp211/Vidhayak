import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    typography: {
        fontWeight:'bold',
        fontSize:20,
        fontFamily: 'Montserrat',
        

    },

    description:{
        fontSize:15,
        fontFamily: 'Montserrat',
    }
})

function ProjectDescription(props) {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            
        <Typography className={classes.typography}>{props.details.req_Projname}</Typography>
        <div className={classes.description}>
        {props.details.req_description}
            </div></div>
    )
}

export default ProjectDescription
