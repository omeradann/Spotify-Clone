import React from 'react'
import logo from './img/logo.svg';
import Menu from './Sidebar/Menu'
import {Icon} from './../Icons';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className='w-60 flex flex-col'>
        <a href='#' className='mb-7'>
            <img src={logo} alt='' className=''></img>
        </a>
        
        <Menu/>

        <nav className='mt-6'>
          <ul>
            <li>
                <NavLink href='#'>
          <span>
          <Icon name="newplaylist"/>
          </span>       
            Çalma listesi oluştur
          </NavLink>
            </li>
           
          </ul>
         
        </nav>
    </aside>
  )
}

export default Sidebar