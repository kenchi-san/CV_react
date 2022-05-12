import {useState} from 'react';
import {portfolioData} from '../../data/portfolioData'
import Project from './Project'

function ProjectList() {
    const [activeProject, setActiveProject] = useState('symfony')
    const infos = portfolioData.map((listInfo) => {

        }
    )
    const tab = [
        {id: 1, value: "javascript"},
        {id: 3, value: "react"},
        {id: 4, value: "php"},
        {id: 5, value: "symfony"},
        {id: 6, value: "wordpress"},
    ]

    return (

        <div className="portfolioContent">
            <ul className="radioDisplay">
                {
                    tab.map((radio) => {
                        return (
                            <li key={radio.id}>
                                <input
                                    type="radio"
                                    name={radio.value}
                                    checked={radio.value === activeProject}
                                    value={radio.value}
                                    id={radio.value}
                                    onChange={(e) => setActiveProject(e.currentTarget.value)}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="projects">
                {portfolioData
                    .filter(item => item.languages.includes(activeProject))

                    .map(({id, name, languages, languagesIcons, source, info, picture, site}) =>
                    <Project
                    key={id}
                    name={name}
                    languages={languages}
                    languagesIcons={languagesIcons}
                    source={source}
                    site={site}
                    version = {info.map((versions)=>versions.version)}
                    info={info}
                    resume = {info.map((resume)=>resume.resume.charAt(0).toUpperCase()+ resume.resume.slice(1,resume.resume.length))}
                    picture={picture}
                    />
                    )}
            </div>
        </div>
    );
}

export default ProjectList;
