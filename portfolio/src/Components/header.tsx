import React, { FC } from 'react';
import gitLogo from '../images/github.svg'
import linkedInLogo from '../images/linkedin.svg'
import '../styles.css'

interface HeaderElements {
    name: string,
    description: string,
    gitHubLink: string,
    linkedInLink: string
}

const Header: FC<HeaderElements> = (props) => {
    return (
        <div id='header'>
            <div className='container'>
                <div className="row">
                    <div id='infoSection' className='col-md-6 col-sm-12'>
                        <h2>{props.name}</h2>
                        <p>{props.description}</p>

                        <a href={props.gitHubLink}>
                            <img className='icon' src={gitLogo} alt="gitlogo" />
                        </a>
                        <a href={props.linkedInLink}>
                            <img className='icon' src={linkedInLogo} alt="gitlogo" />
                        </a>

                        <button className='resumeBtn'>SEE MY RESUME</button>
                    </div>
                    <div  className='col-md-6 col-sm-12'>
                        <img id='profilePicture' src='https://media-exp1.licdn.com/dms/image/C4E03AQHypkXM04RHhw/profile-displayphoto-shrink_800_800/0/1583432178556?e=1640217600&v=beta&t=N90yfPQblfuTqx0OQqB1CSECMRIsqT3DcVBkTbs05P4' alt='profile' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;