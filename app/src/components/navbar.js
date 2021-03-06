import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


class Navbar extends React.Component {

    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand link" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to="/" className="nav-link link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/login" className="nav-link link">Login</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;