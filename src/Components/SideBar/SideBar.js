import React from 'react';
import classes from './SideBar.module.css';
import NavigationItems from '../Header/ToolBar/NavigationItems/NavigationItems';

const SideBar = (props) => {
    let SideBarClasses = [classes.sideBar];
    if(props.sideBarVisible) {
        SideBarClasses.push(classes.openSideBar)
    }
    return(
        <React.Fragment>
            <div className={SideBarClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>            
            </div>
        </React.Fragment>        
    );
}

export default SideBar;