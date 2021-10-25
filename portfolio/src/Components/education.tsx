import React, { FC } from 'react'

interface EducationElements {
    education: Array<any>
}

const Education: FC<EducationElements> = (props) => {
    return (
        <div id='education' className='blueWrapper'>
            <h1 className='center'>Education</h1>
            <div className='container'>
                <div className='row center'>
                    {props.education.map((education) => {
                        return (

                            <div className='card educationCard col-lg-6 col-sm-12'>
                                <h3 id='edu-title'>{education.name}</h3>
                                <h4>{education.type}</h4>
                                <span className='span-highlight'><h6>{education.duration}</h6></span>
                                <p>{education.description}</p>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Education;