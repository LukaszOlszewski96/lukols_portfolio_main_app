import React from 'react';
import "./ContactForm.css";
import {IoPersonCircleOutline, IoTime} from "react-icons/io5";
import {HiOutlineMail} from "react-icons/hi";
import {MdTitle} from "react-icons/md";
import {AiFillCloseSquare} from "react-icons/ai";
import { cloudFirestore } from '../../../DataBase/Configure';
import firebase from '../../../DataBase/Configure';

function ContactForm() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [topic, setTopic] = React.useState("");
    const [text, setText] = React.useState("");



    const addContact= () =>{
        if(!name && !email && !topic && !text){
            alert("The fields must be completed :D")
        }else{
        const date = Date();
        cloudFirestore.collection('contacts').doc(date).set({data: date, name: name, email: email, topic: topic, text: text }).then(()=>{
            alert("Message has been submitted :D")
        }).catch((error)=>{
            alert(error.message);
        })
        setName ("");
        setEmail ("");
        setTopic ("");
        setText ("");
    }
    };


    return (
        <div className="contact-form-conteiner">
            <div className="contact-form-bottom-box">
            <a href="/" className="exit-contact"><AiFillCloseSquare/></a>
            <img className="send_image" src="image/send-image.png"/>
            <div className="contact-form-box">
                <div className="text-contact-box">
                    <p className="title-contact-form">Get in touch</p>
                    <p className="description-contact-form">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                </div>
                <img alt="contact" src="image/contact_image.png"/>
                <div className="input-box-contact">
                    <form className="name-input-form">
                        <div className="icon"><IoPersonCircleOutline/></div>
                        <input id="id" onChange={(e)=>setName(e.target.value)} value={name} className="name-input" type="text" placeholder="Your name..."/>
                    </form>
                    <form className="name-input-form">
                        <div className="icon"><HiOutlineMail/></div>
                        <input onChange={(e)=>setEmail(e.target.value)} value={email}  className="name-input" type="text" placeholder="Your email..."/>
                    </form>
                    <form className="topic-input-form">
                        <div className="icon"><MdTitle/></div>
                        <input onChange={(e)=>setTopic(e.target.value)} value={topic}  className="topic-input" type="text" placeholder="Topic..."/>
                    </form>
                    <form className="textarea-input-form">
                        <textarea onChange={(e)=>setText(e.target.value)} value={text}  className="text-area-input" type="text" />
                    </form>
                    <button href="/" type="submit" onClick={addContact} className="button-submit">Submit</button>
                </div>
                    </div>
                </div>
            </div>
    )
}

export default ContactForm;
