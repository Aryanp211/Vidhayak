import React, { Component } from 'react'
import CentralCard from './CentralCard'
import PendingRequest from './PendingRequest'
import Grid from '@material-ui/core/Grid';


class Authorized extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            clicked:false,
            name:'',
            status:'Authorized',
            category:['Education','Agriculture','Transportation','Infrastructure','Technology','Energy','Environment','Health']
             
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
            <div >  <div style={{fontFamily:'Montserrat',textAlign:'center', fontSize:30}}>AUTHORIZED PROJECTS<hr></hr></div>
                <Grid container spacing={3} justify='center' alignItems='center'>
                {this.state.category.map((mapitem)=>{
                    return ( 
                      
                        <Grid item xs={4}>
                        <CentralCard category={mapitem} status='Authorized'></CentralCard>
                        </Grid>
                        
                )})}
                </Grid>
            </div>
        )
    }
}

export default Authorized
