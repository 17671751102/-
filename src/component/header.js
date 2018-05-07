import React from 'react'
import {NavLink} from 'react-router-dom'
class Header extends React.Component{
    render(){
        return(
            <div>
                <NavLink to='/' activeClassName='active'>home</NavLink>
                <NavLink to='/2222' activeClassName='active'>leak</NavLink>
                <NavLink to='/3333' activeClassName='active'>even</NavLink>
            </div>
        )
    }
}
export default Header