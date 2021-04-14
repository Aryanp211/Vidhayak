import React from 'react'
// import './CSS/NavBar.css'
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'

// const useStyles=makeStyles((theme)=>{
//     root: 
//         paddingTop:theme.spacing(5)
// })



function StateNavbar() {
    return (
        // <Container className={classes.root} disableGutters>
        <AppBar color='Secondary' position='static'>
        
            <Toolbar>
                <Typography variant='h6' style={{flexGrow:1}}>
                State Government
                </Typography>
                <Button className='NavButton' color='inherit' component={Link} to='/stategov/Home' >Home</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/stategov/Request'>Request</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/stategov/Authorized'>Authorized Projects</Button>
                {/* <Button className='NavButton' color='inherit' component={Link} to='/state/Allocate'>Allocate Budget</Button> */}
                <Button className='LogOutButton' href='http://localhost:3000/'>Log Out</Button>
                
            </Toolbar>
        </AppBar>
        // </Container>
        
            
        
    )
}

export default StateNavbar
