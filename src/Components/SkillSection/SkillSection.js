import React from 'react';
import SkillCard from './SkillCard/SkillCard';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import htmlImage from '../../assets/images/html5.png';
import cssImage from '../../assets/images/css3.svg';
import saasImage from '../../assets/images/saas.svg';
import bootstrapImage from '../../assets/images/bootstrap.svg';
import webpackImage from '../../assets/images/webpack.svg';
import jsImage from '../../assets/images/javascript.svg';
import reactImage from '../../assets/images/react_frame.svg';
import typeScriptImage from '../../assets/images/typescript.svg';
import nodeImage from '../../assets/images/node.svg';
import mongodbImage from '../../assets/images/mongodb.svg';
import sqlImage from '../../assets/images/sql.png';
import cSharpImage from '../../assets/images/c.svg';
import gitImage from '../../assets/images/git.svg';
import dockerImage from '../../assets/images/docker.svg';
import herokuImage from '../../assets/images/heroku.svg';
import classes from './SkillSection.module.css';



const SkillSection = (props) => {    
    return(
        <section className={classes.skillSection} id='Skill-Section'>
            <SectionHeading>Technical Skills</SectionHeading>
            <div className={classes.skillCardContainer}>
                <SkillCard source= {htmlImage} name="HTML5" alt="HTML5 icon"/>
                <SkillCard source= {cssImage} name="CSS3" alt="CSS3 icon"/>
                <SkillCard source= {saasImage} name="SAAS" alt="SAAS icon"/>
                <SkillCard source= {bootstrapImage} name="Bootstrap" alt="Bootstrap icon"/>
                <SkillCard source= {jsImage} name="JavaScript" alt="javascript icon"/>
                <SkillCard source= {reactImage} name="React.js" alt="HTML5 icon"/>
                <SkillCard source= {webpackImage} name="Webpack" alt="Webpack icon"/>                
                <SkillCard source= {typeScriptImage} name="TypeScript" alt="TypeScript icon"/>
                <SkillCard source= {nodeImage} name="Node.js" alt="Node.js icon"/>
                <SkillCard source= {cSharpImage} name="C#" alt="C# icon"/>
                <SkillCard source= {mongodbImage} name="MongoDB" alt="Mongo DB icon"/>
                <SkillCard source= {sqlImage} name="SQL" alt="SQL icon"/>
                <SkillCard source= {gitImage} name="GIT" alt="git icon"/>
                <SkillCard source= {dockerImage} name="Docker" alt="docker icon"/>
                <SkillCard source= {herokuImage} name="Heroku" alt="heroku icon"/>
            </div>
        </section>
    );
}

export default SkillSection;