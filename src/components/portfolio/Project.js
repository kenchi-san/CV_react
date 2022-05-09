import {useState} from "react";


function Project({name, languages, languagesIcons, source, info, picture,site}) {
    const [isInfo, setInfo] = useState(false);

    if (isInfo) {
        return (
            <div className="showInfos">
                <div className="infosContent">
                    <div className="head">
                        <h2>{name}</h2>
                        <div className="sourceCode">
                            <a href={source} rel="noopener noreferrer"
                               className="button" target="_blank">Code source
                            </a>
                            <a href={site} rel="noopener noreferrer"
                               className="button" target="_blank">Site web
                            </a>
                        </div>
                    </div>
                    <p className="text">{info}</p>
                    <div className="button return" onClick={() =>
                        setInfo(false)} style={{textAlign: 'center'}}> Fermer
                    </div>

                </div>

            </div>
        )
    }

    return (
        <div className="project">
            <div className="icons">
                {languagesIcons.map(icon =>
                    <i className={icon} key={icon}></i>)}
            </div>
            <h3>{name}</h3>
            <img src={picture} alt={name} onClick={() => setInfo(true)}/>
            <span className="infos">
                <i className="fas fa fa-plus-circle" onClick={() => setInfo(true)}></i>
            </span>
        </div>
    );


}

export default Project;
