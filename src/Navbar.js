import React from "react";
import "./Navbar.css";
import PropTypes from 'prop-types';


const Navbar = ({handleNewGame}) =>(
    <div className="nav">
        <header>
        Match Colors !
        </header>
        <li>
            <button onClick={handleNewGame}>New Game</button>
        </li>
    </div>
)

Navbar.propTypes = {
    handleNewGame : PropTypes.func.isRequired
}

export default Navbar;