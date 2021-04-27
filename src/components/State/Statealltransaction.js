import React from 'react';
import StatealltransactionTable from './StatealltransactionTable';
// import TransactionsTable from './TransactionsTable';;
function Statealltransaction(props) {
    return (
        <div>
        <StatealltransactionTable  statename={props.statename}/>
        </div>
    )
}

export default Statealltransaction;