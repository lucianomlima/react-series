import React, { Component } from 'react';

export default class Partida extends Component {
    render() {
        const { place, date, hour } = this.props;
        return (
            <div>
                <h2>{place}</h2>
                <div>
                    <span>{date}</span>
                    <span>-</span>
                    <span>{hour}</span>
                </div>
            </div>
        );
    }
}

Partida.propTypes = {
    place: React.PropTypes.string,
    date: React.PropTypes.string,
    hour: React.PropTypes.string
}
