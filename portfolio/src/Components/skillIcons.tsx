import React, { FC } from 'react'
import '../styles.css';
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import js from '../images/skills/js.png';
import ts from '../images/skills/ts.png';
import react from '../images/skills/react.png';
import node from '../images/skills/node.png';
import java from '../images/skills/java.png';
import cs from '../images/skills/cs.png';
import cpp from '../images/skills/cpp.png';
import mongo from '../images/skills/mongo.png';
import azure from '../images/skills/azure.png';
import bootsrap from '../images/skills/bootstrap.png';

const SkillIcons: FC = () => {
    return (
        <div>
            <div className='skillsContainer'>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={html} alt='html' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={css} alt='css' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={js} alt='js' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={ts} alt='ts' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={react} alt='react' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={node} alt='node' />
                </div>
            </div>

            <div className='skillsContainer'>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={java} alt='java' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={cs} alt='cs' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={cpp} alt='cpp' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={mongo} alt='mongo' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={bootsrap} alt='bootstrap' />
                </div>
                <div className='skillIconWrapper'>
                    <img className='skillIcon' src={azure} alt='azure' />
                </div>
            </div>
        </div>
    )
}

export default SkillIcons;