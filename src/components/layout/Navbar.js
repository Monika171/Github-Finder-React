import React from 'react'
import PropTypes from 'prop-types';

//prop types-> type checking, tells if a props should be a number, array, string etc. shortcut impt

const Navbar = ({icon, title}) => {
    
    // render() {
        return (
            <nav className="navbar bg-primary">
                <h1>
                    <i className={icon}></i>
                    &nbsp;{title}
                </h1>
            </nav>
        )
    // }
}

// Something to show even if we did not pass anything/ default props

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
