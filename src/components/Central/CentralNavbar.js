import React from 'react'
import './CSS/NavBar.css'
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles=makeStyles((theme)=>{
    root: 
        paddingTop:theme.spacing(5)
})



function CentralNavbar() {
    return (
        // <Container className={classes.root} disableGutters>
        <AppBar color='Secondary' position='static'>
        
            <Toolbar>
                <Typography variant='h6' style={{flexGrow:1}}>
                Central Government
                </Typography>
                <Button className='NavButton' color='inherit' component={Link} to='/Home' >Home</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/Pending'>Pending Projects</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/Authorized'>Authorized Projects</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/Allocate'>Allocate Budget</Button>
                
            </Toolbar>
        </AppBar>
        // </Container>
        
            
        
    )
}

export default CentralNavbar
