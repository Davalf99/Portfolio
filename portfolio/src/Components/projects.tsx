import React, { FC } from 'react';

const Projects: FC = () => {
    return (
        <div id='projectsWrapper' className='blueWrapper'>


            <div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h1>Test1</h1>
                        </div>
                        <div className="carousel-item">
                            <h1>Test2</h1>
                        </div>
                        <div className="carousel-item">
                            <h1>Test3</h1>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div >
    )
}

export default Projects;