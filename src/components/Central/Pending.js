import React, { Component } from 'react'
import CentralCard from './CentralCard'
import PendingRequest from './PendingRequest'
import Grid from '@material-ui/core/Grid';


class Pending extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            clicked:false,
            name:'',
            status:'Pending',
            category:['Education','Agriculture','Transportation','Infrastructure','Technology','Energy','Enviornment','Health']
             
        }
        // this.handleClick=this.handleClick.bind(this)
    }
    
    handleClick=e=>{
        console.log(e.target.value)
        this.setState({
            clicked:true,
            name:e.target.value,
            // status:'Pending'
        })
        
    }

    render() {
    
        return (
            <div> <div style={{fontFamily:'Montserrat',textAlign:'center',alignContent:'center', fontSize:30}}>PENDING PROJECTS<hr></hr></div>
                <Grid container spacing={3} justify='center' alignItems='center'>
                {this.state.category.map((mapitem)=>{
                    return ( 
                      
                        <Grid item xs={4}>
                        <CentralCard category={mapitem} status='Pending'></CentralCard>
                        </Grid>
                        
                )})}
                </Grid>
            </div>
        )
    }
}

export default Pending
