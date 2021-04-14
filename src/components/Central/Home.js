import { Card, Container, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard';


export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             category:['Pending Projects','Auhtorized Projects','','','','','']
        }
    }
    
    render() {
        return (
            <div>
                         <Grid  container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={1}
                            // overflow='auto'
                            // white-space= 'nowrap'
                        >
                {this.state.category.map((mapitem)=>{
                    return ( 
                      
                        <Grid item xs={3} md={2.5} spacing={2}>
                            <Dashboard></Dashboard>

                        </Grid>
                        
                )})}
                </Grid>
            </div>
        )
    }
}

export default Home
