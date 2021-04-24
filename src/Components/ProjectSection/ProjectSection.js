import React from 'react';
import classes from './ProjectSection.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import heycartImage from '../../assets/images/heycart.JPG';


const ProjectSection = (props) => {    
    return(
        <section className={classes.projectSection} id='Project-Section' >
            <div className={classes.projectContainer}>
                <SectionHeading>Projects</SectionHeading>
                <ProjectCard source={heycartImage} projectName="HeyCart" description={`HeyCart is an e-commerce website that sells grocery items. 
                On HeyCart, buyer can choose items from multiple categories and add these products to the cart. If he wishes to buy the product,
                he can proceed with the checkout and payment. There are product pages that provides further information about the product. Customer 
                can create create HeyCart account and do the login when required. This project is built on MERN stack.`}
                technicalDescription={`Technologies used: React, Redux, HTML, CSS, JavaScript, Express, bcrypt, MongoDB, REST API.` }
                gitHubLink="https://github.com/anildabas001/heycart-mern" 
                demoLink="https://heycart.herokuapp.com/"/>
            </div>
        </section>
    );
}

export default ProjectSection;