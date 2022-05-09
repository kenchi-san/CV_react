import React from 'react';
import { Link } from "react-router-dom";


function NotFound() {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <h3> la page n'éxiste pas !</h3>
                <Link to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;