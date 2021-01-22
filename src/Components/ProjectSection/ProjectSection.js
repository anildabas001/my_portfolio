import React from 'react';
import classes from './ProjectSection.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import sampleImage from '../../assets/images/saas.svg';


const ProjectSection = (props) => {    
    return(
        <section id='Project-Section' className={classes.projectSection}>
            <SectionHeading>Projects</SectionHeading>
            <ProjectCard source={sampleImage} projectName="Sample Project" description="lorum ipsum..................." gitHubLink="#" demoLink="#"/>
        </section>
    );
}

export default ProjectSection;