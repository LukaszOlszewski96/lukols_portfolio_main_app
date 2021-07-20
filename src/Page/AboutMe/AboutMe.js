import React from 'react';
import "./AboutMe.css";


function AboutMe() {
    return (
        <div id="go-about" className="about-conteiner">
            <div className="left-box-about">
                <p>About Me</p>
            </div>
            <div className="right-box-about">
                <p className="text-about-me">My name is Luke Olszewski and I am fascinated by creating websites, web applications and mobile applications.<br/> I graduate of engineering studies in the field of Automation and Robotics and currently I am professionally a Senior Automation Engineer in LG Energy Solution.
                                                <br/>Currently I'm doing a master's degree in Computer Science. <br/> I focus all my attention on developing my skills and learning about new technologies that will make my projects even better.  
                                                </p>
                <p className="text-about-me ii">I invite you to view the CV and to the interview.</p>

                <a className="CV-button" href="CV/LukaszOlszewski_CV.pdf">View CV</a>
            </div>
        </div>
    )
}

export default AboutMe;
