import React, { Component } from 'react';

class CardInput extends Component {

    state = {};

    handleChange = (e) => {
        this.setState({
            field1: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            field1: e.target.value
        });
    }
    
    render(){
        return (
            <div className = 'card-info'>
                <form onSubmit = { this.handleSubmit }>
                    <input type = 'text' onChange = { this.handleChange }/>
                    <button>Submit</button>
                </form>
            </div>
        
        )
    }
}

export default CardInput;