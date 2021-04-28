import React from 'react';
import AlltransactionTable from './AlltransactionTable';
// import StatealltransactionTable from './StatealltransactionTable';
// import TransactionsTable from './TransactionsTable';;
function Alltransaction(props) {
    return (
        <div>
        <AlltransactionTable  details={props.data}/>
        </div>
    )
}

export default Alltransaction;