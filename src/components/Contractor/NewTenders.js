import React, { Component } from 'react';
import NewTendersTable from './NewTendersTable'
import {withRouter} from 'react-router-dom'
export class NewTenders extends Component {

    render() {

        return (
            <div>
                <NewTendersTable/>
            </div>
        )
    }
}

export default withRouter(NewTenders);