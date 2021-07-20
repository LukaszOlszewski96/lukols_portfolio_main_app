import React from 'react';
import "./MoreInfo.css";
import {AiFillCloseSquare} from "react-icons/ai";

function MoreInfoLukols() {
    return (
        <div className="more-info-conteiner">
            <div className="more-info-box">
            <div className="information-box">
                <a href="/" className="exit-more"><AiFillCloseSquare/></a>
                <p className="title-more">Portfolio - lukols</p>
                <div className="horizontal-box-more">
                    <div className="left-image-more">

                        <img src="image/lukols_laptop.png"></img>
                    </div>
                    <div className="right-text-more">
                        <p className="title-more-info">INFO</p>
                        <p className="description-info">Lukols was established in April 2021 and since then I have been implementing all my projects under this name.
                        The website functions as my business card and my portfolio.</p>
                        <p className="description-tech">The site was made using technology: HTML5, CSS 3, JavaScript, React, Node.js, Firebase.</p>
                        <p className="description-tech">Graphics were prepared using: Figma, Canva, Photoshop.</p>
                        <p className="title-more-area">Scope of work</p>
                        <p className="description-tech">Design / UI / UX / front-end / back-end development.</p>
                        <p className="link-bottom-des">Link:<a href="https://lukols.com/" className="link-to-side">lukols.com</a></p>
                    </div>
                </div>
            </div>


            </div>
        </div>
    )
}

export default MoreInfoLukols;


