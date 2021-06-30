import React, { Component } from 'react';

// const sqlite3 = require('sqlite3');

class CardInput extends Component {
    

    state = {
        Front: '',
        Back: '',
        Tags: ''
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // let db = new sqlite3.Database('./cards.db', sqlite3.OPEN_READWRITE);
        
        // db.serialize( () => {
        //     db.run('CREATE TABLE IF NOT EXISTS Cards (id INTEGER PRIMARY KEY, Front TEXT UNIQUE, Back');
        //     db.run('INSERT INTO Cards (Front, Back) VALUES (?, ?)', [this.state.Front, this.state.Back]);
        // })

        // db.close();

        console.log(this.state);

        document.getElementById("cardForm").reset()
        
    }
    
    render(){
        return (
            <div className = 'card-info'>
                <form onSubmit = { this.handleSubmit } id = 'cardForm'>
                    <label htmlFor="front">Front:</label>
                    <input type = 'text'id = "Front" onChange = { this.handleChange }/>
                    <label htmlFor="Back">Back:</label>
                    <input type = 'text'id = "Back" onChange = { this.handleChange }/>
                    <label htmlFor="Tags">Tags:</label>
                    <input type = 'text'id = "Tags" onChange = { this.handleChange }/>
                    <button>Submit</button>
                </form>
            </div>
        
        )
    }
}

export default CardInput;