import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';


const NavigationItems = (props) => {    
    return(
        <ul className={classes.navBar}>
            <NavigationItem link="/#Skill-Section">Technical Skills</NavigationItem>
            <NavigationItem link="/#Project-Section">Projects</NavigationItem>
            <NavigationItem link="/#AboutMe-Section">About Me</NavigationItem>
            <NavigationItem link="/#Resume-Section">Resume</NavigationItem>
        </ul>
    );
}

export default NavigationItems;