import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home_goals: 0,
            visitor_goals: 0
        }
    }

    addHomeGoal() {
        this.setState({
            home_goals: this.state.home_goals + 1
        });
    }

    addVisitorGoal() {
        this.setState({
            visitor_goals: this.state.visitor_goals + 1
        });
    }

    render() {
        const { match, home, visitor } = this.props;
        return (
            <div>
                <div style={{float: "left", "marginLeft": "2em"}}>
                    <h3>Casa</h3>
                    <Time
                        name={home.name}
                        goals={this.state.home_goals}
                        addGoal={this.addHomeGoal.bind(this)}/>
                </div>
                <div style={{float: "left", "marginLeft": "2em"}}>
                    <Partida
                        place={match.place}
                        date={match.date}
                        hour={match.hour} />
                </div>
                <div style={{float: "left", "marginLeft": "2em"}}>
                    <h3>Visitante</h3>
                    <Time
                        name={visitor.name}
                        goals={this.state.visitor_goals}
                        addGoal={this.addVisitorGoal.bind(this)}/>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}
