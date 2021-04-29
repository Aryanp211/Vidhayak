import React from 'react'
import TenderTable from './TenderTable'

function Tenders(props) {
    return (
        <div>
           <div style={{fontFamily:'Montserrat',textAlign:'center',alignContent:'center', fontSize:30}}>Initialised Tenders<hr></hr></div>
            <TenderTable statename={props.statename}/>
        </div>
    )
}

export default Tenders
