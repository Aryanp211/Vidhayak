import React from 'react'

function Projectinfo(props) {
    return (
        <div>
            Hi this is project {props.history.location.state.project_id}
        </div>
    )
}

export default Projectinfo
