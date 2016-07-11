import React, { Component } from 'react'

export default class Cursos extends Component {
    render () {
        return (
            <div>
                <h2 className="title">Conheça nossos cursos</h2>
                {this.props.children}
            </div>
        )
    }
}
