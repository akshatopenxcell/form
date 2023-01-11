//import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import AppContext from '../../context/app-context';
import { useContext, useEffect, useState } from 'react';


const MainNavigation= ()=>{

    // const appCtx=useContext(AppContext);
    // const userLoggedIn=appCtx.userLoggedIn;
    // const [show,setShow] =useState(userLoggedIn);
    // useEffect(()=>{

    //     setShow(appCtx.userLoggedIn)
    // },[userLoggedIn])
    return (
        <header className={classes.header}>
                <div className={classes.logo}> Form</div>
                
                <nav className={classes.nav}>
                    {/* <ul>
                      {show  && <li><NavLink to='/posts' activeClassName={classes.active}>All Posts</NavLink></li>}
                    </ul> */}
                </nav>
        </header>
       
    )
}

export default MainNavigation;