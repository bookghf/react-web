import React, {useState} from 'react'
import { NavBar, NavLogo ,NavMenu, NavLink, NavList, Bars} from '../styles/styledElements'


function Nav() {

    const [show,setShow] = useState(false);
    console.log(show);

    return (
        <>
            <NavBar show={show}>
                <Bars onClick={() => setShow(!show)}/>
                <NavLogo to='/'>
                    My React-Site
                </NavLogo>
                
                <NavMenu show={show}>
                    <NavList>
                        <NavLink onClick={() => setShow(false)} to='/'> Home </NavLink>
                    </NavList>
                    <NavList>
                        <NavLink onClick={() => setShow(false)} to='/About'> About </NavLink>
                    </NavList>
                    <NavList>
                        <NavLink onClick={() => setShow(false)} to='/Blog'> Blog </NavLink>
                    </NavList>
                </NavMenu>
            </NavBar>
        </>
    )
}

export default Nav