import React, { FC } from 'react'

interface EducationElements {
    education: Array<any>
}

const Education: FC<EducationElements> = (props) => {
    return (
        <div id='education'>
            <h1 className='center'>Education</h1>
            <div className='container'>
                <div className='row'>
                    {props.education.map((education) => {
                        return (

                            <div className='educationCard col-lg-6 col-sm-12'>
                                <h3>{education.name}</h3>
                                <p>{education.type}</p>
                                <p>{education.duration}</p>
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