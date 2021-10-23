import React, { FC } from 'react';

interface ExperienceElements {
    experience: Array<any>
}

const Experience: FC<ExperienceElements> = (props) => {
    return (
        <div>
            <h1 className='center'>Experience</h1>
            <div className='container'>
                <div className='row center'>
                    {props.experience.map((experience) => {
                        return (
                            <div className='card experienceCard'>
                                <div className='companyName'>
                                    <h3>{experience.company}</h3>
                                </div>
                                <p>{experience.position}</p>
                                <p>{experience.duration}</p>
                                <p>{experience.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience;