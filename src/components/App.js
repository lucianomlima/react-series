import React, { Component } from 'react';
import PlacarContainer from './PlacarContainer';

const data = {
    match: {
        place: 'Fonte Nova/BA',
        date: '10/07/2016',
        hour: '19h'
    },
    home: {
        name: 'Bahia'
    },
    visitor: {
        name: 'Vitória'
    }
};

export default class App extends Component {
    render() {
        return (
            <PlacarContainer {...data} />
        )
    }
}
