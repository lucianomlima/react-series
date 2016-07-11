import React, { Component } from 'react';

const cursos = [
    {name: "React"},
    {name: "NodeJS"},
    {name: "Flux"},
    {name: "Redux"},
];
export default class Curso extends Component {
    render () {
        return (
            <h1 className="title">Curso {cursos[this.props.params.id].name}</h1>
        )
    }
}
