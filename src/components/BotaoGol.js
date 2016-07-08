import React, { Component } from 'react';

export default class BotaoGol extends Component {
    handleClick(e) {
        e.preventDefault();
        this.props.addGoal();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Gol!</button>
        )
    }
}
