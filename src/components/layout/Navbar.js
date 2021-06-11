import React, { Component } from 'react'
import PropTypes from 'prop-types';

//prop types-> type checking, tells if a props should be a number, array, string etc. shortcut impt

export class Navbar extends Component {
    // Something to show even if we did not pass anything/ default props

    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={this.props.icon}></i>
                    &nbsp;{this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
