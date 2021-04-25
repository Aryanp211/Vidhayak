import React from 'react'
import TenderTable from './TenderTable'

function Tenders(props) {
    return (
        <div>
            <TenderTable statename={props.statename}/>
        </div>
    )
}

export default Tenders
