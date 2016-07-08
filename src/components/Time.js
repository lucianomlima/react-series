import React, { Component } from 'react';
import BotaoGol from './BotaoGol';

export default class Time extends Component {
    render() {
        const { name, goals, addGoal } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <h2>{goals}</h2>
                <BotaoGol addGoal={addGoal} />
            </div>
        );
    }
}
