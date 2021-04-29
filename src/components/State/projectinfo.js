
import { Card, Container, Typography,TabScrollButton, Button } from '@material-ui/core'
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import ProjectDashboard from './ProjectDashboard';
import './CSS/Home.css'
import {withRouter} from 'react-router-dom'
// import categories from '../Categories'
import axios from 'axios'
import ProjectDescription from './ProjectDescription';
import ProjectTransaction from './ProjectTransaction'
// import ref from 



class projectinfo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Items:[],
            details:[],
            condition:false,
            
            Cat:['Total Money Allocated','Total Transactions','','See Transactions'],
            routes:['NewTenders','FiledTenders','ArchivedTenders','SeeTransactions'],
            colors:['#793c3c']
        }
    }


    componentDidMount() {
console.log('HHHCHCHCHCHCHC')
        console.log(this.props.history.location.state.details)

        axios.get('http://localhost:5000/project/details/'+this.props.history.location.state.details._id)
        .then(res=>{
            this.setState({ 
                details:res.data,
                condition:true
            })
        })
    }

    // componentDidMount(){
    //     // console.log('Idharrrr')
    //     console.log('id',this.props.history.location.state.project_id)
    //     axios.get('http://localhost:5000/project/details/'+this.props.history.location.state.project_id)
    //     .then(res=>{
    //         console.log(res)
    //         this.setState({
    //         details:res.data
    //         })
    //         console.log('hahahaha',res.data.contractor_Authorized.contractor_details)
    //     }).catch(()=>console.log('Nahi hora'))
    // }

    
handleClick=()=>{
    this.props.history.push('/stategov/OngoingProjects',this.props.history.location.state.details.req_state)

}

handleEnd=()=>{
    var x={
        id:this.props.history.location.state.details._id
    }
    axios.post('http://localhost:5000/project/end',x)
    .then(res=>{

     console.log(res)
})
}
handleRefresh=()=>{
    axios.get('http://localhost:5000/project/details/'+this.props.history.location.state.details._id)
        .then(res=>{
            this.setState({ 
                details:res.data,
                condition:true
            })
})
}
    // scrolls = (scrollOffset) => {
    //     this.myRef.current.scrollLeft += scrollOffset;
    //   };



    
    render() {
    let cnt=-1
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    console.log(this.props.history.location.state.details)
    // this.componentDidMount()
        return(
            <div className='Griddiv' style={{textAlign:'center'}}>
            {/* <Grid container justify='center' alignItems='center' className='GridContainerCon' spacing={4} >
            {this.state.Cat.map((mapItem)=>{
                cnt=cnt+1; */}
                {/* // return(
                    // <Grid item className='GridItemCon'  xs={3}> */}
                    {this.state.condition===true?
                    <Grid container xs>
                        <Grid item xs={12}>
                    
                            <Button onClick={this.handleClick}>Back</Button>
                        </Grid>
                        <Grid item xs={12} >
                        <ProjectDashboard details={this.state.details}></ProjectDashboard>
                        </Grid>
                        
                        <Grid item xs={12} style={{paddingTop:50}}>
                            <hr></hr>
                            <ProjectDescription details={this.state.details}></ProjectDescription>
                            <hr></hr>
                        </Grid>
{/* 
                        <Grid item xs={12} style={{paddingTop:50}}>
                            <Button onClick={this.handleRefresh}>Refresh</Button>
                        </Grid> */}
                        <Grid item xs={12} style={{paddingTop:50}}>
                            <ProjectTransaction details={this.state.details}></ProjectTransaction>
                        </Grid>
                        
{/* 
                        <Grid item xs={12} style={{paddingTop:50}}>
                            <Button style={{color:'white', backgroundColor:'black'} } onClick={this.handleEnd(this.state.details)}></Button>
                        </Grid> */}



          </Grid>
           : null} 
            </div>
        )
        
    }
}

export default withRouter(projectinfo);
