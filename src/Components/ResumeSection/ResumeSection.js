import React from 'react';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import Button from '../UI/Button/Button';
import classes from './ResumeSection.module.css';


const ResumeSection = (props) => {    
    return (
        <section id='Resume-Section' className={classes.resumeSection}>
            <SectionHeading>Resume</SectionHeading>
        <div className={classes.resumeContainer}>
            <Button>View Resume</Button>
            <Button>Download Resume</Button>
        </div>
    </section>
    );    
}

export default ResumeSection;