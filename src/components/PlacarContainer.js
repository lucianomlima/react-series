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
        const { match, home, visitor, weath } = this.props;
        const style = {float: "left", "marginLeft": "2em"};

        return (
            <div>
                <div style={style}>
                    <h3>Casa</h3>
                    <Time
                        {...home}
                        goals={this.state.home_goals}
                        addGoal={this.addHomeGoal.bind(this)}/>
                </div>
                <div style={style}>
                    <Partida {...match} />
                    <div>Clima: {weath}</div>
                </div>
                <div style={style}>
                    <h3>Visitante</h3>
                    <Time
                        {...visitor}
                        goals={this.state.visitor_goals}
                        addGoal={this.addVisitorGoal.bind(this)}/>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}

PlacarContainer.propTypes = {
    match: React.PropTypes.shape({
        place: React.PropTypes.string,
        date: React.PropTypes.string,
        hour: React.PropTypes.string
    }),
    home: React.PropTypes.shape({
        name: React.PropTypes.string
    }),
    visitor: React.PropTypes.shape({
        name: React.PropTypes.string
    }),
    weath: React.PropTypes.string
}

PlacarContainer.defaultProps = {
    weath: 'Ensolarado'
}
