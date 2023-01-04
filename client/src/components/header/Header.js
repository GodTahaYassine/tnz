import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'


const Header = () => {
  
  return (
    <div className=" header " >
        <nav className="navbar navbar-expand-lg bg-light d-flex justify-content-between align-middle ">
            <div className="container-fluid">
                <Link className="navbar-brand  logo-nav" to="/">
                    <img src="/logo.png" alt="logo" style={{height:'100px',width:'200px'}}
                    onClick={() => window.scrollTo({top:0})} /> 
                </Link>
                <Search />
                <Menu />
            </div>
        </nav>
    </div>  
  )
}

export default Header