import React from 'react';
import "./Portfolio.css";
import {AiOutlineAliwangwang} from 'react-icons/ai';


function Portfolio() {

    return (
        <div id="go-portfolio" className="portfolio-conteiner">
            <p className="portfolio-name">My Work</p>
            <p className="portfolio-text">Projects that I have done and which I am currently creating.</p>
            <div className="box-portfolio">
            <div className="horizontal-box-portfolio">
                <div className="portfolio-box-image">
                    <img src="image/lukols.png"></img>
                    <div className="overlay-image" >
                        <div className="icon-logo-portfolio"><AiOutlineAliwangwang/></div>
                        <p className="lukols-title">lukols</p>
                        <div className="more-info-button"><a href="/lukols-more" className="button-portfolio" >More info</a></div>
                    </div>
                </div>
                <div className="portfolio-box-image">
                    <img src="image/fox.png"></img>
                    <div className="overlay-image">
                    <div className="img-fox-logo">
                            <img src="image/fox_icon.png"></img>
                        </div>
                        <p className="fox-title">unien</p>
                        <div className="more-info-button"><a href="/unien-more" className="button-portfolio">More info</a></div>
                    </div>
                </div>
                <div className="portfolio-box-image">
                    <img src="image/pupil.png"></img>
                    <div className="overlay-image">
                        <div className="img-pupil-logo">
                            <img src="image/logo_pupil.png"></img>
                        </div>
                        <p className="pupil-title">Pupil</p>
                        <div className="more-info-button"><a href="/pupil-more" className="button-portfolio">More info</a></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Portfolio;
