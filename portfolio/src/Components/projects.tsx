import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';

interface ProjectsElements {
    projects: Array<any>
}

const Projects: FC<ProjectsElements> = (props) => {
    return (
        <div id='projectsWrapper' className='blueWrapper'>
            <Carousel>
                {props.projects.map((projects) => {
                    return (

                        <Carousel.Item interval={1000000}>
                            <div className='container'>
                                <div className='row center'>
                                    <div className='projectCard card'>
                                        <h1>{projects.title}</h1>
                                        <div className='container'>
                                            <div className='row center'>
                                                <div className='col-md-12 col-lg-4 test2'>
                                                    <p>{projects.description}</p>
                                                </div>
                                                <div className='col-md-12 col-lg-8'>
                                                    <img className='project-image' src='https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg' alt=''/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div >
    )
}

export default Projects;