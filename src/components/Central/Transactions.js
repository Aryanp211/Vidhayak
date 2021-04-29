import React from 'react';
import TransactionsTable from './TransactionsTable';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Avatar from '@material-ui/core/Avatar';
function Transactions() {
    return (
        <div>
           
<div style={{fontFamily:'Montserrat',textAlign:'center', fontSize:30}}>ALL TRANSACTIONS<hr></hr></div>
            <TransactionsTable></TransactionsTable>
        </div>
    )
}

export default Transactions
