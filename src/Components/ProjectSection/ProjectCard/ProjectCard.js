import React from 'react';
import classes from './ProjectCard.module.css';
import Button from '../../UI/Button/Button';


const ProjectCard = (props) => {    
    return(
        <div className={classes.projectCard}>
           <h3>{props.projectName}</h3> 
           <div className={classes.projectInfo}>
                <div className={classes.projectImage}>
                    <a target='_blank' href={props.demoLink}><img src={props.source} alt={props.alt} /></a>
                </div>
                <div className={classes.description}>
                    <p style={{textIndent: '0px'}}>
                       {props.description}
                    </p>   
                    <p style={{marginTop: '20px', fontWeight: 400}}>
                       {props.technicalDescription} 
                    </p>
                </div>                              
           </div>
           <div className={classes.button}>
                    <Button target='_blank' link={props.demoLink}>Try Demo</Button>
                    <Button target='_blank' link={props.gitHubLink}>View Code</Button>
            </div>
        </div>
        
    );
}

export default ProjectCard;
