import React, { Component } from 'react'
import StateCard from './StateCard'
// import PendingRequest from './PendingRequest'
import Grid from '@material-ui/core/Grid';
import categories from '../Categories'


class Pending extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clicked:false,
            name:'',
            status:'Pending',
            category: categories,
            state:this.props.statename

        }
        // this.handleClick=this.handleClick.bind(this)
    }

    handleClick=e=>{
        console.log(e.target.value)
        this.setState({
            clicked:true,
            name:e.target.value,
            status:'Pending'
        })

    }

    render() {

        return (
            <div><div style={{fontFamily:'Montserrat',textAlign:'center',alignContent:'center', fontSize:30}}>PENDING PROJECTS<hr></hr></div>
                <Grid container spacing={3} justify='center' alignItems='center'>
                {this.state.category.map((mapitem)=>{
                    console.log('---',this.props.statename)
                    return ( 
                    //   {}
                        <Grid item xs={4}>
                        <StateCard category={mapitem} status='Pending' statename={this.props.statename}></StateCard>
                        </Grid>
                )})}
                </Grid>
            </div>
        )
    }
}

export default Pending
