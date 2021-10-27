import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';

interface ProjectsElements {
    projects: Array<any>
}

const Projects: FC<ProjectsElements> = (props) => {
    return (
        <div id='projectsWrapper' className='blueWrapper'>
            <h1 className='center projects-header'>Projects</h1>
            <Carousel>
                {props.projects.map((projects) => {
                    return (

                        <Carousel.Item interval={1000000}>
                            <div className='container'>
                                <div className='row center'>
                                    <div className='projectCard card'>
                                        <h2 id='project-title'>{projects.title}</h2>
                                        <div className='container'>
                                            <div className='row center'>
                                                <div className='col-md-12 col-lg-4 project-description'>
                                                    <p>{projects.description}</p>
                                                    <a href={projects.github} className='btn btn-primary project-btn'>GitHub</a>
                                                    <a href={projects.site_url} className='btn btn-dark project-btn'>Visit</a>
                                                </div>
                                                <div className='col-md-12 col-lg-8'>
                                                    <img className='project-image custom-shadow' src={projects.image_url} alt='project'/>
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