import React from 'react'
import './CSS/NavBar.css'
import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home'
import {
    Typography,
    AppBar,
    Toolbar,
    Button,
    makeStyles} from '@material-ui/core'
import DehazeIcon from '@material-ui/icons/Dehaze';
import {Link} from 'react-router-dom'
import Emblem from '../State/Logos/Emblem.svg'
// const useStyles=makeStyles((theme)=>{
//     root: 
//         paddingTop:theme.spacing(5)
// })


const useStyles = makeStyles({
    list: {
      width: 250,
      
      
    },
    fullList: {
      width: 'auto',
      // height:10
    },
    name: {
      
      // textAlign: 'center',
      // alignItems:'center',
      // alignContent:'center',
      // position:'relative'
      display: 'table-cell',
    verticalAlign: 'middle'
    },
    child:{
      fontSize:10,
      verticalAlign:'middle'
    }
  });


function ContractorNavbar() {

    const classes = useStyles();
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });




    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
              
                {/* // <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                
              
<ListItem>
 <Button className='NavButton'  component={Link} to='/contractor/Home' >HOME</Button>
{/* <ListItemText primary='Home' /> */}
</ListItem>

<ListItem>
<Button className='NavButton' color='inherit' component={Link} to='/central/Pending'>PENDING PROJECTS</Button>
{/* <ListItemText primary='Pending Projects' /> */}
</ListItem>

<ListItem>
<Button className='NavButton' color='inherit' component={Link} to='/central/Authorized'>AUTHORIZED PROJECTS</Button>
{/* <ListItemText primary='Authorized Projects' /> */}
</ListItem>

<ListItem>
<Button className='NavButton' color='inherit' component={Link} to='/central/Allocate'>ALLOCATE BUDGET</Button>
{/* <ListItemText primary='Allocate Budget' /> */}
</ListItem>



            
          </List>
          <Divider />
        </div>
      );


    return (
        // <Container className={classes.root} disableGutters>
        <AppBar  position='static'>
        
            <Toolbar className='AppBar' >
                <Typography variant='h6' style={{flexGrow:1, display:'flex'}}>
                
{/* <div> */}

        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Button edge='start' 
                        onClick={toggleDrawer(anchor, true)}>
                        <DehazeIcon></DehazeIcon>
                    </Button>

                    <Drawer anchor={anchor} 
                        open={state[anchor]} 
                        onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
                {/* <Button onClick={()=>{this.pro}} */}

                {/* <div className='EmblemCentraldiv'>
        <img src={Emblem} className='EmblemCentral'></img>
        </div> */}
                
                <div className={classes.name}>
                  {/* <p className={classes.ptag} > */}
                  <div className={classes.child}>
                CONTRACTOR
                </div>
                {/* </p> */}
                </div>

            {/* </div> */}
                </Typography>



                <div>
       </div>


                <Button className='HomeButton' color='inherit' component={Link} to='/contractor/Home' ><HomeIcon></HomeIcon></Button>
                {/* <Button className='NavButton' color='inherit' component={Link} to='/central/Pending'>Pending Projects</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/central/Authorized'>Authorized Projects</Button>
                <Button className='NavButton' color='inherit' component={Link} to='/central/Allocate'>Allocate Budget</Button> */}
                <Button className='LogOutButton' color='inherit' href='http://localhost:3000/'>Log Out</Button>
                
            </Toolbar>
        </AppBar>
        // </Container>
        
            
        
    )
}

export default ContractorNavbar




