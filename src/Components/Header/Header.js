import React, {useState} from 'react';
import ToolBar from './ToolBar/ToolBar';
import classes from './Header.module.css';

const Header = (props) => {    
    return(
        <header id='/' className={classes.portfolioHeader}>
            <ToolBar sideBarHandler={props.sideBarHandler}/>
            <h1 className={classes.portfolioHeader_heading}>Hello, my name is Anil Dabas. <br />I'm a Full Stack Web Developer.</h1>
        </header>
    );
}

export default Header;