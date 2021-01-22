import React from 'react';
import classes from './Footer.module.css';
import mailImage from '../../assets/images/mail.svg';
import gitHubImage from '../../assets/images/github.svg';
import linkedInImage from '../../assets/images/linkedin.svg';
import Icon from '../UI/Icon/Icon';

const FooterSection = (props) => {    
    return (
        <footer class={classes.footerSection}>
            <div className={classes.contactLinks}>
                <a href="#"><Icon source={mailImage} alt="Email Link"/></a>
                <a href="#"><Icon source={gitHubImage} alt="GitHub Link"/></a>
                <a href="#"><Icon source={linkedInImage} alt="Linkedin profile"/></a>
            </div>            
            <p>	&copy;2021 Anil Dabas. All rights reserved.</p>
            
        </footer>
    );    
}

export default FooterSection;