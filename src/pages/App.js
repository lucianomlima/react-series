import React, { Component } from 'react'

export default class App extends Component {
    render () {
        return (
            <div>
                <nav className="nav is-tab has-shadow">
                    <div className="nav-left">
                        <a href="#" className="nav-item">Home</a>
                        <a href="#" className="nav-item">Cursos</a>
                        <a href="#" className="nav-item">Sobre</a>
                    </div>
                </nav>
                <section className="section">
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
