import React from 'react';
import classes from './SectionHeading.module.css';


const SectionHeading = (props) => {    
    return(
       <h2 className={classes.sectionHeading}>{props.children}</h2>
    );
}

export default SectionHeading;