import React from 'react';
import SectionHeading from '../UI/SectionHeading/SectionHeading';
import classes from './AboutMeSection.module.css';
import user from '../../assets/images/user.svg';


const AboutMeSection = (props) => {    
    return (
        <section id='AboutMe-Section' className={classes.aboutMeSection}>
            <SectionHeading>About Me</SectionHeading>
        <div className={classes.aboutMeContainer}>
            <div className={classes.imageContainer}>
                <img src={user} alt="Profile picture"/>
            </div>
            <p className={classes.paragraph}>
                lorum import dolas.....
            </p>
        </div>
    </section>
    );    
}

export default AboutMeSection;