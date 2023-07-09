import React from 'react'
import {Icon} from './../../Icons';
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
        <ul className='flex flex-col'>
            <li>
                
                <NavLink to={"/"} className='h-10 flex gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 active:bg-active'>
                    <span>
                        <Icon name="home"/>
                        </span>                   
                    Ana sayfa
                </NavLink>
                
            </li>
            <li>
                <NavLink activeClassName="bg-active text-white" to={"/search"} className='h-10 flex  gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 active:bg-active'>
                <span>
                        <Icon name="search"/>
                        </span>  
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-white" to={"/collection"} className='h-10 flex  gap-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4 active:bg-active'>
                <span>
                        <Icon name="collection"/>
                        </span>  
                Kitaplığım
                </NavLink>
            </li>
            
        </ul>
    </nav>
  )
}

export default Menu