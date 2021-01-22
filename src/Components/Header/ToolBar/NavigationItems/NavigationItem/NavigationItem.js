import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import classes from './NavigationItem.module.css';


const NavigationItem = (props) => {    
    return(
        // <li className={classes.navItem}><a href='#Skill-Section'>{props.linkName}</a></li>
        // <li className={classes.navItem}><a href={props.link}>{props.linkName}</a></li>
        //<Link to="/Skill-Section">L</Link>
        <li className={classes.navItem}><NavHashLink smooth to={props.link}>{props.children}</NavHashLink></li>
       //<NavHashLink  to="/#Skill-Section" >Link to Hash Fragment</NavHashLink>
    );
}

export default NavigationItem;