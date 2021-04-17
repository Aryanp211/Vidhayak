import { Card, Container, Typography,TabScrollButton } from '@material-ui/core'
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard';
import './CSS/Home.css'
import categories from '../Categories'
import axios from 'axios'
// import ref from 



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Items:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/requests')
        .then(res=>{
            this.setState({
            Items:res.data
            })
            console.log(res.data)
        })
    }

    scrolls = (scrollOffset) => {
        this.myRef.current.scrollLeft += scrollOffset;
      };

    
    render() {
        return (
            <div>
                         {/* <Grid  container
                            className='ContainerGrid'
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                            // xs={12}
                        
                            // overflow='auto'
                            // white-space= 'nowrap'
                        > */}
                        <div className='ContainerGrid'>
                {this.state.Items.map((item)=>{
                    
                    return ( 
                      
                        <div className='GridItem'>
                            <Dashboard></Dashboard>

                        </div>
                        
                )})}




                </div>
                
            </div>
        )
    }
}

export default Home
