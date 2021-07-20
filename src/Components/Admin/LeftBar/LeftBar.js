import React from 'react';
import './LeftBar.css';
import { MenuLinks } from './MenuLinks';
import { AiOutlineAliwangwang } from 'react-icons/ai'

function LeftBar() {
    return (
        <div className="leftBar-conteiner">
            <a className="icon-logo-admin"  href="/admin"><AiOutlineAliwangwang/></a>
            <ul className="menu-box-admin">
                {MenuLinks.map((item,index)=>{
                    return(
                        <il key={index}>
                            <a className={item.class} href={item.url}>{item.title}</a>
                        </il>
                    )
                })}
            </ul>
        </div>
    )
}

export default LeftBar;
