import React from 'react';
import classes from './ProjectCard.module.css';
import Button from '../../UI/Button/Button';


const ProjectCard = (props) => {    
    return(
        <div className={classes.projectCard}>
           <h3>{props.projectName}</h3> 
           <div className={classes.projectInfo}>
                <div className={classes.projectImage}>
                    <a href={props.demoLink}><img src={props.source} alt={props.alt} /></a>
                </div>
                <p className={classes.description}>
                   {props.description} 
                </p>                                
           </div>
           <div className={classes.button}>
                    <Button link={props.demoLink}>Try Demo</Button>
                    <Button link={props.gitLink}>View Code</Button>
            </div>
        </div>
        
    );
}

export default ProjectCard;
