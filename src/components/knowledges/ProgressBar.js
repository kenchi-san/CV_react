import React from 'react';

function ProgressBar({languages, className, title}) {

    return (
            <div className={className}>
                <h3>{title}</h3>
                <div className="years">
                    <span> Années d'expérience</span>
                    <span> 1 an</span>
                    <span>3 an</span>
                </div>

                <div>
                    {
                        languages.map((item) => {
                            let xpYears = 3;
                            let progressBar = item.xp / xpYears * 100 + '%';

                            return (
                                <div key={item.id} className="languagesList">
                                    <li>{item.value}</li>
                                    <div className="progressBar" style={
                                        {width: progressBar}}>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    );
}

export default ProgressBar;
