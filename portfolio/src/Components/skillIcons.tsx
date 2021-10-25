import React, { FC } from 'react'
import '../styles.css';
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import js from '../images/skills/js.png';
import ts from '../images/skills/ts.png';
import react from '../images/skills/react.png';
import node from '../images/skills/node.png';
import java from '../images/skills/java.png';
import cs from '../images/skills/cs.svg';
import cpp from '../images/skills/cpp.png';
import mongo from '../images/skills/mongo.png';
import azure from '../images/skills/azure.png';
import bootsrap from '../images/skills/bootstrap.png';

const SkillIcons: FC = () => {
    return (
        <div className='skillsMainContainer'>
            <div className='skillsContainer center'>
                <div title='html-5'className='skillIconWrapper'>
                    <img className='skillIcon' src={html} alt='html' />
                </div>
                <div title='css3' className='skillIconWrapper'>
                    <img className='skillIcon' src={css} alt='css' />
                </div>
                <div title='JavaScript' className='skillIconWrapper'>
                    <img className='skillIcon' src={js} alt='js' />
                </div>
                <div title='TypeScript' className='skillIconWrapper'>
                    <img className='skillIcon' src={ts} alt='ts' />
                </div>
                <div title='React' className='skillIconWrapper'>
                    <img className='skillIcon' src={react} alt='react' />
                </div>
                <div title='Node' className='skillIconWrapper'>
                    <img className='skillIcon' src={node} alt='node' />
                </div>
            </div>

            <div className='skillsContainer center'>
                <div title='Java' className='skillIconWrapper'>
                    <img className='skillIcon' src={java} alt='java' />
                </div>
                <div title='C#' className='skillIconWrapper'>
                    <img className='skillIcon' src={cs} alt='cs' />
                </div>
                <div title='C++' className='skillIconWrapper'>
                    <img className='skillIcon' src={cpp} alt='cpp' />
                </div>
                <div title='Mongo' className='skillIconWrapper'>
                    <img className='skillIcon' src={mongo} alt='mongo' />
                </div>
                <div title='BootStrap' className='skillIconWrapper'>
                    <img className='skillIcon' src={bootsrap} alt='bootstrap' />
                </div>
                <div title='Azure' className='skillIconWrapper'>
                    <img className='skillIcon' src={azure} alt='azure' />
                </div>
            </div>
        </div>
    )
}

export default SkillIcons;