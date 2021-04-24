import React, {useState, useEffect} from 'react';
import ToolBar from './ToolBar/ToolBar';
import classes from './Header.module.css';

const Header = (props) => {
    const [textHeahing, updateText] = useState('');  
    
    useEffect(() => {
        var text= `Hello, my name is Anil Dabas.\nI'm a Full Stack Web Developer.`;
        var i = 0;
        var speed = 100;

        function typeWriter() {
            
            if (i < text.length) {
                updateText(state => {
                    return state + text.charAt(i);
                })
                i++;
                setTimeout(typeWriter, speed);
            }
        } 

        setTimeout(() => {
            typeWriter();
        }, 200);


    }, []);

    return(
        <header id='/' className={classes.portfolioHeader}>
            <ToolBar sideBarHandler={props.sideBarHandler}/>
            <h1 className={classes.portfolioHeader_heading}>{<>{textHeahing}</>}</h1>
        </header>
    );
}

export default Header;