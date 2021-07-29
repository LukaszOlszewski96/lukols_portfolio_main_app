import React from 'react';
import { statBoxItem } from './statBoxItem';
import './StatBoxBtn.css';

function StatBoxBtn() {
    return (
        <div className="statBoxBtn-conteiner">
            <ul className="statBoxBtn-ul">
                {statBoxItem.map((item,index)=>{
                    return(
                        <il className="statBoxBtn-il">
                            <a className={item.className} href={item.href}><div className="icon-statBoxBtn">{item.icon}</div><p className="title-statBoxBtn">{item.title}</p><p className="number-statBoxBtn">10</p></a>
                        </il>
                    )
                })}
            </ul>
        </div>
    )
}

export default StatBoxBtn
