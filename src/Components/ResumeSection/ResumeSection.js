import React from 'react';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import Button from '../UI/Button/Button';
import classes from './ResumeSection.module.css';
import resume from '../../assets/images/Anil Dabas_resume_.pdf';


const ResumeSection = (props) => {    
    return (
        <section id='Resume-Section' className={classes.resumeSection}>
            <SectionHeading>Resume</SectionHeading>
        <div className={classes.resumeContainer}>
            <Button link={resume} target='_blank'>View Resume</Button>
            <Button link={resume} download='Anil Dabas_resume'>Download Resume</Button>
        </div>
    </section>
    );    
}

export default ResumeSection;