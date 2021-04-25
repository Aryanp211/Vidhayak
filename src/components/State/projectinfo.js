
import { Card, Container, Typography,TabScrollButton } from '@material-ui/core'
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
            Cat:['Total Money Allocated','Total Transactions','','See Transactions'],
            routes:['NewTenders','FiledTenders','ArchivedTenders','SeeTransactions'],
            colors:['#793c3c']
        }
    }

    componentDidMount(){
        // console.log('Idharrrr')
        console.log('id',this.props.history.location.state.project_id)
        axios.get('http://localhost:5000/project/details/'+this.props.history.location.state.project_id)
        .then(res=>{
            console.log(res)
            this.setState({
            Items:res.data
            })
            console.log(res.data)
        }).catch(()=>console.log('Nahi hora'))
    }

    // scrolls = (scrollOffset) => {
    //     this.myRef.current.scrollLeft += scrollOffset;
    //   };

    
    render() {
    let cnt=-1
        return(
            <div className='Griddiv' style={{textAlign:'center'}}>
            {/* <Grid container justify='center' alignItems='center' className='GridContainerCon' spacing={4} >
            {this.state.Cat.map((mapItem)=>{
                cnt=cnt+1; */}
                {/* // return(
                    // <Grid item className='GridItemCon'  xs={3}> */}

                    <Grid container xs>
                        <Grid item xs={12} >
                        <ProjectDashboard ></ProjectDashboard>
                        </Grid>

                        <Grid item xs={12} style={{paddingTop:50}}>
                            <ProjectDescription></ProjectDescription>
                        </Grid>

                        <Grid item xs={12} style={{paddingTop:50}}>
                            <ProjectTransaction></ProjectTransaction>
                        </Grid>




          </Grid>
            </div>
        )
        
    }
}

export default withRouter(projectinfo);
