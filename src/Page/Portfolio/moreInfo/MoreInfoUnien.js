import React from 'react';
import "./MoreInfo.css";
import {AiFillCloseSquare, AiFillGithub} from "react-icons/ai";

function MoreInfoUnien() {
    return (
        <div className="more-info-conteiner">
            <div className="more-info-box">
            <div className="information-box">
                <a href="/" className="exit-more"><AiFillCloseSquare/></a>
                <p className="title-more">Project - UNIEN</p>
                <p className="in-progress">- In progress -</p>
                <div className="horizontal-box-more">
                    <div className="left-image-more">

                        <img src="image/unien_info.png"></img>
                    </div>
                    <div className="right-text-more">
                        <p className="title-more-info">INFO</p>
                        <p className="description-info">Unien is a training website project aimed at increasing the competences of Polish engineers in the field of Automation, Robotics, Electrical and Electronics.</p>
                        <p className="description-tech">The site was made using technology: HTML5, CSS 3, JavaScript, React, Node.js, Firebase.</p>
                        <p className="description-tech">Graphics were prepared using: Figma, Canva, Photoshop.</p>
                        <p className="title-more-area">Scope of work</p>
                        <p className="description-tech">Design / UI / UX / front-end / back-end development.</p>
                        <p className="link-bottom-des">Link:<a className="link-to-side">soon</a></p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default MoreInfoUnien;