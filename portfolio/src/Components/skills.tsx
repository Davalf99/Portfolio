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
                            <li>{skill}</li>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}

export default Skills;