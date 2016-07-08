import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends Component {
    render() {
        return (
            <div>
                <div style={{float: "left", "marginLeft": "2em"}}>
                    <h3>Casa</h3>
                    <Time />
                </div>
                <div style={{float: "left", "marginLeft": "2em"}}>
                    <Partida />
                </div>
                <div style={{float: "left", "marginLeft": "2em"}}>
                    <h3>Visitante</h3>
                    <Time />
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}
