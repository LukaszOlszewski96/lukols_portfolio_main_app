import React, { useEffect }  from 'react'
import './Portfolio.css';
import HeaderPortfolio from '../../../Components/Admin/Header/HeaderPortfolio'
import StatBoxPortfolio from '../../../Components/Admin/TopBar/StatBoxPortfolio'
import { useState } from 'react';
import {cloudFirestore, storage} from '../../../DataBase/Configure';

//Dodać końcowe informacje do bazy danych na temat projektów


function Portfolio() {

    const [ portfolioCard, setPortfolioCard ] = useState([]);
    const [ values, setValues ] = useState({
        name: '',
        title: '',
        info: '',
        technology: '',
        graphic: '',
        scope: '',
        link: '',
        url: ''
    });
   
    const [image, setImage] = useState(null);

    const handleSubmit = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleImg = (event) => {
        setImage(event.target.files[0]);
    };

    const clickButton = () => {
        //Add image to storage
        storage.ref(`Portfolio/${values.name}/main_img/${image.name}`).put(image);
        //Get IMAGE URL from storage
        storage.ref(`Portfolio/${values.name}/main_img`).child(image.name).getDownloadURL().then( url => {
            // Add data to firestore
                cloudFirestore.collection("projects").add({
                name: values.name,
                title: values.name,
                info: values.info,
                technology: values.technology,
                scope: values.scope,
                link: values.link,
                url: values.url,
                image: url
            })
        })

        //TO DO:  clear input formulage
    }
    const getData = async() => {
        try {
            //Get data from firestore
            const collection = cloudFirestore.collection('projects');
            const data = await collection.get();
            data.docs.forEach(res => {
                setPortfolioCard([...portfolioCard, res.data()])
            });
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
       getData();
    }, [])

    return (
        <div className="portfolio-frame">
            <HeaderPortfolio/>
            <StatBoxPortfolio/>
            <div className='conteiner-formulage-card'>
                <div className='portfolio-card-conteiner'>
                    {portfolioCard.map(item => {
                        return(
                            <div className="portfolio-box-image">
                                <img src={item.Image} alt='img'/>
                                <div className="overlay-image" >
                                    <p className="lukols-title">{item.Title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='formulage-conteiner'>
                    <label for='website-name'>Name</label>
                    <input id='website-name' type='text' value={values.name} onChange={handleSubmit('name')}/>
                    <label for='title'>Title</label>
                    <input id='title' type='text' value={values.title} onChange={handleSubmit('title')}/>
                    <label for='info'>Info</label>
                    <textarea id='info' value={values.info} onChange={handleSubmit('info')}/>
                    <label for='technology'>Technology</label>
                    <input id='technology' type='text' value={values.technology} onChange={handleSubmit('technology')}/>
                    <label for='graphic'>Graphic</label>
                    <input id='graphic' type='text' value={values.graphic} onChange={handleSubmit('graphic')}/>
                    <label for='scope'>Scope of work</label>
                    <input id='scope' type='text' value={values.scope} onChange={handleSubmit('scope')}/>
                    <label for='link'>Link name</label>
                    <input id='link' type='text' value={values.link} onChange={handleSubmit('link')}/>
                    <label for='addressWWW'>Address URL</label>
                    <input id='addressWWW' type='text' value={values.url} onChange={handleSubmit('url')}/>
                    <input type='file' onChange={handleImg}/>
                    <button type='submit' onClick={clickButton}>Dodaj</button>

                </div>
            </div>
        </div>
    )
}

export default Portfolio
