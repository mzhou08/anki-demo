import React, { Component } from 'react';

// const sqlite3 = require('sqlite3');

class Search extends Component {
    

    state = {
        term: '',
    };
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        try {
            fetch(`http://clapp1-dev.eba-bfkixsew.us-east-2.elasticbeanstalk.com/api/search/?q=${ this.state.term }&class_id=91`, {
                method: 'GET'
            })
        } catch (error) {
            fetch(`http://clapp1-dev.eba-bfkixsew.us-east-2.elasticbeanstalk.com/api/search/?q=${ this.state.term }&class_id=91`, {
                method: 'GET'
            })
        }
        .then(resp => resp.json())
        .then(resp => console.log(resp))

        document.getElementById("searchBar").reset()
        
    }
    
    render(){
        return (
            <div className = 'card-info'>
                <form onSubmit = { this.handleSubmit } id = 'searchBar'>
                    <label htmlFor="term">Search Term:</label>
                    <input type = 'text'id = "term" onChange = { this.handleChange }/>
                    <button>Search and Get Definition</button>
                </form>
            </div>
        
        )
    }
}

export default Search;