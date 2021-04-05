import React, { Component } from 'react';
import axios from 'axios';

class tp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             bid:0,
            //  contractor:{}
        }
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        axios.push('http://localhost:3000',this.state)
        console.log(this.state)
    }
    
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <input type='text' placeholder='' name='name' value={this.state.name} onClick={this.handleChange}></input>
                    </div>

                    <div>
                        <input type='number' placeholder='' name='bid' value={this.state.bid} onClick={this.handleChange}></input>
                    </div>

                    <button type='submit'>Chaitanya Bhadwe Idhar daba</button>
                    </form>
    
                
            
        )
    }
}

export default tp
