import React from 'react';
import {Link} from 'react-router-dom';
import myLogo from '../media/myLogo.png';
function Navigation() {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={myLogo} alt="profil-pic"/>
                    <h3> Hugo Charon</h3>
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/" >
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </Link>
                    </li>
                    {/*<li>*/}
                        {/*<Link to="/competences" >*/}
                        {/*    <i className="fas fa-mountain"></i>*/}
                        {/*    <span>Compétences</span>*/}
                        {/*</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link to="/portfolio" >
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Contact" >
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/hugo-charon/" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/hugo_charon" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i> </a>
                    </li>
                    <li>
                        <a href="https://github.com/kenchi-san" target="_blank"
                           rel="noopener noreferrer">
                            <i className="fab fa-github"></i> </a>
                    </li>

                </ul>
                <div className="signature">
                <p>fromScratch -2022</p>
            </div>
            </div>
        </div>
    );
}

export default Navigation;