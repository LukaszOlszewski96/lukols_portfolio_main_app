import React,{ useEffect } from 'react';
import { statBoxItem } from './statBoxItem';
import './StatBoxBtn.css';
import { cloudFirestore } from '../../../DataBase/Configure';


function StatBoxBtn() {
   
    const [numbNewCont,setNumbNewCont] = React.useState([]);
    const [numbProjCont, setNumProjCont] = React.useState([])

    useEffect(() => {
        const getNewContact = async() => {
            try {
                    await cloudFirestore.collection('contacts').get().then(snap => setNumbNewCont(snap.size))
            } catch(err) {
                console.error(err);
            }};
            const getProjects = async() => {
                try{
                    await cloudFirestore.collection('projects').get().then(snap => setNumProjCont(snap.size))
                }catch(err){
                    console.error(err);
                }};
        
        getProjects();
        getNewContact();
    }, []);


    return (
        <div className="statBoxBtn-conteiner">
            <ul className="statBoxBtn-ul">
                {statBoxItem.map((item,index)=>{
                    return(
                        <il className="statBoxBtn-il">
                            <a className={item.className} href={item.href}>
                                <div className="icon-statBoxBtn">{item.icon}</div>
                                <div className="statBoxBtn-number-title">
                                    <p className="title-statBoxBtn">{item.title}</p>
                                    <p className="number-statBoxBtn">
                                        {item.title === 'Message' && numbNewCont}
                                        {item.title === 'Actual projects' && numbProjCont}
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

export default StatBoxBtn
