import React, {useState, createContext, useContext} from 'react';
import SideBar from '../../Components/SideBar/SideBar';
import Header from '../../Components/Header/Header';
import SkillSection from '../../Components/SkillSection/SkillSection';
import ProjectSection from '../../Components/ProjectSection/ProjectSection';
import AboutMeSection from '../../Components/AboutMeSection/AboutMeSection';
import ResumeSection from '../../Components/ResumeSection/ResumeSection';
import classes from './Layout.module.css';
import SideBarContext from '../../Context/SideBarContextData';
import Footer from '../../Components/Footer/Footer';

const Layout = (props) => {
    document.title = 'Anil Dabas';
    const [layoutState, layoutSetState] = useState({
        showSideBar: false
    });

    const sideBarHandler = ()=> {
        layoutSetState((state)=>{
            return {showSideBar: !state.showSideBar}
        });
    }

    return(
        <SideBarContext.Provider value={{crossHamBurger: layoutState.showSideBar, sideBarHandler: sideBarHandler}}>
            <Header />
            <SideBar sideBarVisible={layoutState.showSideBar}/>
            <div class={classes.content}>                
                <SkillSection />
                <ProjectSection />
                <AboutMeSection />
                <ResumeSection />
                <Footer />
            </div>
        </SideBarContext.Provider>        
    );
}

export default Layout;
