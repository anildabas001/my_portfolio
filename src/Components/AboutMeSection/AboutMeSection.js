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
                Hello, I am Anil Dabas and I having 2 years of work experience in developing, testing, and debugging Responsive Web Applications.
                Highly skilled in Web technologies like HTML5, CSS3, React.js, Ajax, JavaScript(ES5/ES6), Node.js, Express, MongoDB, Mongoose and MS SQL. 
                I have good knowledge of C# and .NET Core. Initially I started my career in Tata Consultancy Services as an SAP Basis Administrator, then after some time moved to Web Development Projects.                
                I worked in TCS for more than three years in different IT domains. Then in 2020 I did my Computer Application Development course from Conestoga College Waterloo, 
                which was a great learning experience.
                There I got the opportunity to work for Descartes Systems Group as an Software Developer Intern for four months.
                I am having Bachelors degree in Information Technology. I have deep interest in Web Development and love to learn new Technologies. 
            </p>
        </div>
    </section>
    );    
}

export default AboutMeSection;