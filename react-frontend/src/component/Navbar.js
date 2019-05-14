import React from 'react';
import {NavLink} from 'react-router-dom';

import * as router from '../constants/routes';
import './NavBar.css'

const NavBar = (props) =>
    <div>

        <NavLink to={router.HOME} activeClassName='active'>HOME </NavLink>
        <NavLink to={router.USERS} activeClassName='active'>USERS </NavLink>
        <NavLink to={router.POST} activeClassName='active'>POST </NavLink>
        <NavLink to={router.ROOT} exact activeClassName='active'>ROOT </NavLink>
        {props.logStat
        ? <NavLink onClick={props.logOut}>LOGOUT</NavLink>
        : <NavLink to={router.LOGIN} exact activeClassName='active'>LOGIN</NavLink>
        }
       
    </div>

export default NavBar