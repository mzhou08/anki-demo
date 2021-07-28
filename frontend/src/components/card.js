import React, { Component } from 'react';

class Card extends Component {

    state = {
        Front: 'front here',
        Back: 'back here'
    }

    render() {

        return (
            <div className = 'Card'>
                <div>{this.state.Front}</div>
                <hr/>
                <div>{this.state.Back}</div>
            </div>
        )
    }
}

export default Card;