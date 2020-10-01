import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        };
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">SamComTechno Test</Link>
                        <button onClick={this.toggleOpen} className={this.state.isOpen ? 'navbar-toggler' : 'navbar-toggler collapsed'} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={this.state.isOpen ? true : false} aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={this.state.isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" activeClassName="text-danger" to="">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="text-danger" to="/favourite">Favourites</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
