import React from 'react';
import classes from './SkillCard.module.css';


const SkillCard = (props) => {    
    return(
        <div className={classes.skillCard}>
            <img src={props.source} alt={props.alt}></img>
            <p>{props.name}</p>
        </div>
    );
}

export default SkillCard;