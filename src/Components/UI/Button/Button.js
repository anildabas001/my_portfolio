import React, {useState} from 'react';
import classes from './Button.module.css';


const Button = (props) => {    
    return(
        <a target={props.target} className={classes.button} download={props.download} href={props.link}>{props.children}</a>
    );
}

export default Button;