import React from 'react';
import Navigation from "../components/Navigation";
import cv from "../media/cv_hugo_charon.png"
function Home(){
    return (
        <div className="home">
            <Navigation/>
            <div className="homeContent">
                <div className="content">
                    <h1>Hugo Charon</h1>
                    <h2>
                        Développeur php/Symfony
                    </h2>
                    <div className="pdf">
                        <a href={cv} target="_blank">Télécharger CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;