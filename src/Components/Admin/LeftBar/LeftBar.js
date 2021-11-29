import React from 'react';
import {Link} from 'react-router-dom';
import './LeftBar.css';
import { MenuLinks } from './MenuLinks';
import { AiOutlineAliwangwang } from 'react-icons/ai';
import { RiLogoutBoxLine} from 'react-icons/ri';
import { auth } from '../../../DataBase/Configure';
import './LeftBar.css'


function LeftBar() {

    const logOut = () =>{
        auth().signOut()
    };

    return (
            <div className="leftBar-conteiner">
                <Link className="icon-logo-admin"  to="/admin"><AiOutlineAliwangwang/></Link>
                <ul className="menu-box-admin">
                    {MenuLinks.map((item,index)=>{
                        return(
                            <il className="list-link-admin" key={index}>
                                <Link className={item.class} to={item.url}><div className="icon-menu-item">{item.icon}</div>{item.title}</Link>                    
                            </il>
                        )
                    })}
                </ul>
                <Link className="logOut-admin" to="" onClick={logOut}><div className="icon-menu-item"><RiLogoutBoxLine/></div>Log Out</Link>
            </div>
    )
}

export default LeftBar;
