import React from 'react';
import "./Skill.css";
import {AiOutlineMobile} from "react-icons/ai";
import {BiCodeBlock} from "react-icons/bi";
import {IoSchoolOutline} from "react-icons/io5";


function Skill() {
    return (
        <div  className="skill-conteiner">
            <div className="box-border" >
                <p className="skill-name" id="go-skill">Skills</p>
                <p className="skills-text">Technologies and tools that I currently use and which I want to learn in 2021.</p>
                <div className="skill-box-image">
                    <div className="skill-mobileDev">
                        <div className="skill-icon"><AiOutlineMobile/></div>
                        <p >Mobile developer:</p>
                        <div className="horizontal-skill-box">
                            <img alt="android" src="image/Android.png"></img>
                            <img alt="kotlin" className="Kotlin-img" src="image/Kotlin.png"></img>
                            <img alt="java" className="Java-img" src="image/Java.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img alt="mysql" className="MySQL-img" src="image/MySQL.png"></img>
                            <img alt="firebase" className="Firebase-img" src="image/Firebase.png"></img>
                            <img alt="git" className="Git-img" src="image/git.png"></img>
                        </div>
                        <div className="horizontal-skill-box">                            
                            <img alt="figma" className="Figma-img" src="image/Figma.png"></img>
                            <img alt="canva" className="Canva-img" src="image/Canva.png"></img>
                        </div>
                    </div>
                    <div className="skill-webDev">
                        <div className="skill-icon"><BiCodeBlock/></div>
                        <p>Front-end developer:</p>
                        <div className="horizontal-skill-box">
                            <img alt="javascript" className="JavaScript-img" src="image/JavaScript.png"></img>
                            <img alt="html" className="HTML-img" src="image/HTML.png"></img>
                            <img alt="css" className="CSS-img" src="image/CSS.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img alt="react" className="React-img" src="image/React.png"></img>
                            <img alt="mysql" className="MySQL-img" src="image/MySQL.png"></img>
                            <img alt="firebase" className="Firebase-img" src="image/Firebase.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img alt="nodejs" className="node-img" src="image/nodeJS.png"></img>
                            <img alt="git" className="Git-img" src="image/git.png"></img>
                        </div>
                        <div className="horizontal-skill-box">
                            <img alt="figma" className="Figma-img" src="image/Figma.png"></img>
                            <img alt="canva" className="Canva-img" src="image/Canva.png"></img>
                        </div>
                    </div>
                    <div className="skill-lern">
                        <div className="skill-icon"><IoSchoolOutline/></div>
                        <p>What I want to learn:</p>
                        <div className="horizontal-skill-box">
                            <img alt="react native" className="R-Native" src="image/ReactNative.png"></img>
                            <img alt="tensorflow" className="TensorFlow-img" src="image/TensorFlow.png"></img>
                            <img alt="three js" className="Three-img" src="image/threeJS.png"></img>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
    )
}
export default Skill;
