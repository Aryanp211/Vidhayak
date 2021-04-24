import { Card, Container, Typography,TabScrollButton } from '@material-ui/core'
import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard';
import './CSS/Home.css'
// import categories from '../Categories'
import axios from 'axios'
// import ref from 



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Items:[],
            Cat:['New Tenders','Filed Tenders','Archived Tenders','See Transactions'],
            routes:['NewTenders','FiledTenders','ArchivedTenders','SeeTransactions'],
            colors:['#793c3c']
        }
    }

    componentDidMount(){
        // console.log('Idharrrr')
        axios.get()
        .then(res=>{
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
            <Grid container justify='center' alignItems='center' className='GridContainerCon' spacing={4} >
            {this.state.Cat.map((mapItem)=>{
                cnt=cnt+1;
                return(
                    <Grid item className='GridItemCon'  xs={6}>
                        <Dashboard item={mapItem} color={this.state.colors[cnt]} route={this.state.routes[cnt]} ></Dashboard>
                    </Grid>
                )
                
            })}
            </Grid>
            </div>
        )
        
    }
}

export default Home
