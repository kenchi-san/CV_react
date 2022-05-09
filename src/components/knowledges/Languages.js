import React from 'react';
import ProgressBar from './ProgressBar'

const state = {
    languages: [
        {id: 1, value: "Javascript", xp: 0.5},
        {id: 2, value: "PHP", xp: 3},
        {id: 3, value: "Css", xp: 2},
        {id:4, value: "gitHub", xp: 1.5},
    ],
    frameworks: [
        {id: 1, value: "Symfony", xp: 3},
        {id: 2, value: "Bootstrap", xp: 1},
        {id: 3, value: "React", xp: 0.2},

    ]


}

function Languages() {
    let {languages, frameworks} = state
    return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliotèques"
                    className="frameworksDisplay"
                />
            </div>
    );
}

export default Languages;
