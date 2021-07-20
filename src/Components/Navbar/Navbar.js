import React from 'react';
import "./Navbar.css";
import {AiOutlineAliwangwang} from 'react-icons/ai';
import {TiThMenu} from 'react-icons/ti';
import {IoClose} from 'react-icons/io5';

function Navbar() {
    
    const [hamburger,setHamburger] = React.useState(false);
    const [click, setClick] = React.useState(false);

    const clickMenu =()=>{
        setClick(!click);
    }

    const showHamburger = ()=>{
        if (window.innerWidth <= 800){
            setHamburger(true);
        }
        else{
            setHamburger(false);
        }
    };

    window.addEventListener('resize',showHamburger);
    

    return (
        <div className={click ?"navbar-conteiner active" : "navbar-conteiner"}>
            <a className="icon-logo"  href="https://lukols.com/"><AiOutlineAliwangwang/></a>
            <a  className="logo" href="https://lukols.com/">lukols</a>
            {hamburger ? 
            <div className="hamburger-menu"> 
                <a className="hamburger-icon" href="#" onClick={clickMenu}>{click?<IoClose/>:<TiThMenu/>}</a>
                <div className={click?"menu-conteiner active":"menu-conteiner"}>
                    <ul className={click ? 'menu-links active' : 'menu-links'}>
                        <li><a href="#go-home" className="link home">Home</a></li>
                        <li><a href="#go-about" className="link about">About</a></li>
                        <li><a href="#go-skill" className="link skill">Skills</a></li>
                        <li><a href="#go-portfolio" className="link portfolio">Portfolio</a></li>
                        <li><a href="#go-contact" className="link contact">Contact</a></li>
                    </ul>
                </div>
            </div>
             : <div className="menu-conteiner">
                <ul className="menu-links">
                    <li><a href="#go-home" className="link">Home</a></li>
                    <li><a href="#go-about" className="link">About</a></li>
                    <li><a href="#go-skill" className="link">Skills</a></li>
                    <li><a href="#go-portfolio" className="link">Portfolio</a></li>
                    <li><a href="#go-contact" className="link">Contact</a></li>
                </ul>
            </div>}
        </div>
    )
}

export default Navbar;
