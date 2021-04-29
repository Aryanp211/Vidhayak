import React from 'react';
import StatealltransactionTable from './StatealltransactionTable';
// import TransactionsTable from './TransactionsTable';;
function Statealltransaction(props) {
    return (
        <div>
             <div style={{fontFamily:'Montserrat',textAlign:'center',alignContent:'center', fontSize:30}}>STATE TRANSACTIONS<hr></hr></div>
        <StatealltransactionTable  statename={props.statename}/>
        </div>
    )
}

export default Statealltransaction;