import React, {useContext} from 'react';
import iconImage from '../../../assets/images/react.png';
import Icon from '../../UI/Icon/Icon';
import NavigationItems from './NavigationItems/NavigationItems';
import {NavHashLink} from 'react-router-hash-link';
import HamBurger from '../../UI/HamBurger/HamBurger';
import classes from './ToolBar.module.css';
import SideBarContext from '../../../Context/SideBarContextData';

const ToolBar = (props) => {   
    
    const SideBarContextData = useContext(SideBarContext);    
    console.log(SideBarContextData);
    return(
        <div className={classes.toolBar}>
            <NavHashLink smooth to='/#'><Icon source = {iconImage}/></NavHashLink>
            <nav>
                <NavigationItems /> 
            </nav>    
            <HamBurger crossHamBurger={SideBarContextData.crossHamBurger} clickHandler={SideBarContextData.sideBarHandler} />       
        </div>
    );
}

export default ToolBar;