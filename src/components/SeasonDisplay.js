import React from 'react';

//config objects
const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Burrr it is cold',
        iconName: 'snowflake'
    }
}


const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    //Extracting options to config object (seasonConfig)
    const { text, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon-right icon massive`} />
        </div>
    )
}

export default SeasonDisplay;