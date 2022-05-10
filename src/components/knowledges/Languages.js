import React from 'react';
import ProgressBar from './ProgressBar'
import {languagesFramework} from '../../data/languages&Framework';


const languages = languagesFramework.map((item) => item.languages);
const frameworks = languagesFramework.map((item) => item.frameworks);
function Languages() {
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
