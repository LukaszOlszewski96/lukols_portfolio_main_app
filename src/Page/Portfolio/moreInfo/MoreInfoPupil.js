import React from 'react';
import "./MoreInfo.css";
import {AiFillCloseSquare} from "react-icons/ai";

function MoreInfoPupil() {
    return (
        <div className="more-info-conteiner">
            <div className="more-info-box">
            <div className="information-box">
                <a href="/" className="exit-more"><AiFillCloseSquare/></a>
                <p className="title-more">Project - Pupil</p>
                <p className="in-progress">- In progress -</p>
                <div className="horizontal-box-more">
                    <div className="left-image-more">

                        <img src="image/pupil_more.png"></img>
                    </div>
                    <div className="right-text-more">
                        <p className="title-more-info">INFO</p>
                        <p className="description-info">Pupil is an application project for the andorid system. The aim of the project is to create an application that will facilitate the search and reporting of missing or finding a pet.</p>
                        <p className="description-tech">The site was made using: Andorid Studio, Kotlin, Firebase.</p>
                        <p className="description-tech">Graphics were prepared using: Figma, Canva, Photoshop</p>
                        <p className="title-more-area">Scope of work</p>
                        <p className="description-tech">Design / UI / UX / Mobile Development.</p>
                        <p className="link-bottom-des">Link:<a className="link-to-side">soon</a></p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default MoreInfoPupil;