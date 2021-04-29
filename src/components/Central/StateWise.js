import React,{useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 150,
    justifyContent:'right',
    
    // position:'fixed'
  },

  container:{
    
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();
let [data,handleData]= useState([])
  axios.get('http://localhost:5000/requests/states').then(res=>{
    handleData(res.data)
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
  console.log(res.data)}
  )

  let states=['Andhra Pradesh',
  'Kerala',
  'Chhattisgarh',
  'Uttar Pradesh' ,
  'Goa',
  'Gujarat',
  'Jharkhand',
   'Madhya Pradesh',
  'Maharashtra',
  'Mizoram']
  
  const printProjects=state=>{
      let count=0
      for(let i=0;i<data.length;i++){
          if (data[i].req_state===state && data[i].req_status!='Pending'){
              count+=1
          }
      }
      console.log('COUNT',count)
      return count
  }
  


// const classes=useStyle()
  return (
    <TableContainer component={Paper} style={{ maxHeight: 400 }} className={classes.container}>
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="right">Projects</StyledTableCell>
            {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {states.map((row) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row}
              </StyledTableCell>
              <StyledTableCell align="right">{printProjects(row)}</StyledTableCell>
              {/* <TableCell align="right">{row.fat}</TableCell> */}
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}