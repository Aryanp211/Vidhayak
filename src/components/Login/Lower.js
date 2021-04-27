import React from 'react'
import { withRouter } from 'react-router'
import LowerTransaction from '../Contractor/LowerTransaction'

function Lower() {
    return (
        <div>

            <LowerTransaction/>
        </div>
    )
}

export default withRouter(Lower)