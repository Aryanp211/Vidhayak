import React, { Component } from 'react';
import NewTendersTable from './NewTendersTable'
import {withRouter} from 'react-router-dom'
export class NewTenders extends Component {

    render() {

        return (
            <div><div style={{fontFamily:'Montserrat',textAlign:'center',alignContent:'center', fontSize:30}}>NEW TENDERS<hr></hr></div>
                <NewTendersTable/>
            </div>
        )
    }
}

export default withRouter(NewTenders);