import React, {useState} from 'react';
import classes from './Button.module.css';


const Button = (props) => {    
    return(
        <a className={classes.button} href={props.link}>{props.children}</a>
    );
}

export default Button;