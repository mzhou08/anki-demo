import React, { Component, useEffect } from 'react';

// const sqlite3 = require('sqlite3');

class CardInput extends Component {
    

    state = {
        deck: '',
        front: '',
        back: ''
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('http://127.0.0.1:5000/cards/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))

        document.getElementById("cardForm").reset()
        
    }
    
    render(){
        return (
            <div className = 'card-info'>
                <form onSubmit = { this.handleSubmit } id = 'cardForm'>
                    <label htmlFor="deck">Deck:</label>
                    <input type = 'text'id = "deck" onChange = { this.handleChange }/>
                    <label htmlFor="front">Front:</label>
                    <input type = 'text'id = "front" onChange = { this.handleChange }/>
                    <label htmlFor="Back">Back:</label>
                    <input type = 'text'id = "back" onChange = { this.handleChange }/>
                    <button>Create Card</button>
                </form>
            </div>
        
        )
    }
}

export default CardInput;