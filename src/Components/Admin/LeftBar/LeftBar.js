import React from 'react';
import './LeftBar.css';
import { MenuLinks } from './MenuLinks';
import { AiOutlineAliwangwang } from 'react-icons/ai'
import { RiLogoutBoxLine} from 'react-icons/ri';

function LeftBar() {
    return (
        <div className="leftBar-conteiner">
            <a className="icon-logo-admin"  href="/admin"><AiOutlineAliwangwang/></a>
            <ul className="menu-box-admin">
                {MenuLinks.map((item,index)=>{
                    return(
                        <il className="list-link-admin" key={index}>
                            <a className={item.class} href={item.url}><div className="icon-menu-item">{item.icon}</div>{item.title}</a>                    
                        </il>
                    )
                })}
            </ul>
            <a className="logOut-admin" href="#"><div className="icon-menu-item"><RiLogoutBoxLine/></div>Log Out</a>
        </div>
    )
}

export default LeftBar;
