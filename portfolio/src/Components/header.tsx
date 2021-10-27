import React, { FC } from 'react';
import gitLogo from '../images/github.svg'
import linkedInLogo from '../images/linkedin.svg'
import '../styles.css'


interface HeaderElements {
    name: string,
    description: string,
    gitHubLink: string,
    linkedInLink: string,
    resume: string
}

const Header: FC<HeaderElements> = (props) => {
    return (
        <div id='header' className='container blueWrapper'>

            <div className='navbar fixed-top'>
                <h3 id='nameText'>{props.name}</h3>
            </div>
            <div className="row center">

                <div className='profWrapper col-lg-6 col-sm-12'>
                    <h2 className='center'>
                        Hey, I'm {props.name}!
                    </h2>
                    <img id='profilePicture' className='custom-shadow' src='https://avatars.githubusercontent.com/u/46801794?v=4' alt='profile' />
                </div>

                <div id='infoSection' className='col-lg-6 col-sm-12'>

                    <p className='testp'>{props.description}</p>

                    <div>

                        <a href={props.gitHubLink}>
                            <img className='icon' src={gitLogo} alt="gitlogo" />
                        </a>
                        <a href={props.linkedInLink}>
                            <img className='icon' src={linkedInLogo} alt="gitlogo" />
                        </a>

                        <a className='resumeBtn btn btn-secondary' href={props.resume}>SEE MY RESUME</a>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Header;