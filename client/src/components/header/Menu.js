import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'

const Menu = () => {
    const navLinks = [
        {label: 'Home', icon: 'home', path: '/'},
        {label: 'Message', icon: 'near_me', path: '/message'},
        {label: 'Discover', icon: 'explore', path: '/discover'},
        {label: 'Notify', icon: 'notifications', path: '/notify'}
    ]
    
    const { auth, theme } = useSelector(state => state )
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    
    const isActive = (pn) => {
        if(pn === pathname) return 'active'
    }

  return (
        <div className="menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                {
                    navLinks.map((link, index)=> (
                        <li className="nav-item px-2 " key={index}>
                            <Link className={`nav-link ${isActive(link.path)}`} aria-current="page" to={link.path}>
                                <span className="material-symbols-outlined">{link.icon}</span>
                            </Link>
                        </li>
                    ))
                }
                <li className="nav-item dropdown">
                <span className="nav-link " role="button" 
                data-bs-toggle="dropdown" aria-expanded="false">
                     <Avatar src={auth.user.avatar} size="medium-avatar" />
                </span>
                <ul className="dropdown-menu">
                    <li className='d-flex justify-content-start align-items-center'>
                        <Link className="dropdown-item d-flex " to={`/profile/${auth.user._id}`}>
                            <span className="material-symbols-outlined ">account_circle</span>
                            <label className='pt-1' >Profile</label>
                        </Link>
                    </li>   
                    <li className="d-flex flex-row justify-content-start align-items-center" onClick={()=> dispatch({
                        type: GLOBALTYPES.THEME , payload: !theme
                    })}>
                        <div className="dropdown-item d-flex flex-row">
                            <span className="material-symbols-outlined   " >{theme ?  'light_mode' : 'dark_mode'}</span>
                            <label htmlFor='theme' className='pt-1' >{theme ?  'Light Mode' : 'Dark Mode'}</label>
                        </div>
                    </li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/" onClick={() => dispatch(logout())}>
                        <div className="dropdown-item d-flex flex-row">
                                <div>
                                    <span className="material-symbols-outlined  mt-1 " >logout</span>
                                </div>
                                <div>
                                    <label htmlFor='theme' className='pt-1' >Logout</label>
                                </div>
                        </div>
                    </Link></li>
                </ul>
                </li>
            </ul>
        </div>
  )
}

export default Menu