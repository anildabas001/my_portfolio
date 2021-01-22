import React, {useState} from 'react';
import classes from './Icon.module.css';


const Icon = (props) => {    
    return(
        <div className={classes.icon}>
            <img src={props.source} alt="React Icon"/>
        </div>
    );
}

export default Icon;