import React, { FC } from 'react';
import '../styles.css';
import SkillIcons from './skillIcons'
interface SkillsElements {
    skillDescription: Array<string>
}

const Skills: FC<SkillsElements> = (props) => {
    return (
        <div className='skillSection'>
            <h1 className='center'>My Skills</h1>

            <SkillIcons />

            <div className='center'>
                <ul >
                    {props.skillDescription.map((skill) => {
                        return (
                            // <li>{skill}</li>
                            <p>
                                <img className='bullet'src='https://twemoji.maxcdn.com/2/72x72/26a1.png' alt='*'/> {skill}
                            </p>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default Skills;