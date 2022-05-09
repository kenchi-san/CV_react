import React from 'react';

function Hobbies() {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fa fa-running"></i>
                    <span> marche à pied</span>
                </li>
                <li className="hobby">
                    <i className="fa fa-film"></i>
                    <span> cinéma </span>
                </li>
                <li className="hobby">
                    <i className="fa fa-code"></i>
                    <span> informatique</span>
                </li>

                <li className="hobby">
                    <i className="fa fa-book"></i>
                    <span> mangas</span>
                </li>
            </ul>
        </div>
    );
}

export default Hobbies;
