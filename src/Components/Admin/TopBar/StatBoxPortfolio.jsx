import React,{ useEffect } from 'react';
import {statBoxPortfolio } from './statBoxItem';
import './StatBoxBtn.css';
import { cloudFirestore } from '../../../DataBase/Configure';


function StatBoxPortfolio() {

    const [numbProjCont, setNumProjCont] = React.useState([]);

    useEffect(() => {

            const getProjects = async() => {
                try{
                    await cloudFirestore.collection('projects').get().then(snap => setNumProjCont(snap.size))
                }catch(err){
                    console.error(err);
                }};

        getProjects();
    }, []);


    return (
        <div className="statBoxBtn-conteiner">
            <ul className="statBoxBtn-ul">
                {statBoxPortfolio.map((item,index)=>{
                    return(
                        <il className="statBoxBtn-il">
                            <a className={item.className} href={item.href}>
                                <div className="icon-statBoxBtn">{item.icon}</div>
                                <div className="statBoxBtn-number-title">
                                    <p className="title-statBoxBtn">{item.title}</p>
                                    <p className="number-statBoxBtn">
                                        {item.title === 'Total' && numbProjCont}
                                    </p>
                                </div>
                            </a>
                        </il>
                    )
                })}
            </ul>
        </div>
    )
}

export default StatBoxPortfolio
