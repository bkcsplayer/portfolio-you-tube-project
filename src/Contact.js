import React from 'react';
import './Contact.css';
import emailjs from "emailjs-com";
import { useContext, useRef, useState } from "react";
import contactImg from "./img/doge-mini-removebg-preview.png"
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
   
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_nswbyex",
          "template_kaa7i8a",
          formRef.current,
          "user_Ld2mI0y1e16c2SzyWou9G"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className="contact component__space" id="Contact">
        <div className="row">
        <div className="col__2">
        <div className="contact__box">
        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            <p className="hire__text white">Tell me your needs and let me help you convert them into programs</p>
                           <p className="hire__text white">Email <strong>bkcsplayer@gmail.com</strong></p>
                        </div>
        <form  className="input__box" ref={formRef} onSubmit={handleSubmit}>
              <input  type="text" className="contact name" placeholder="Name" name="user_name" />
              <input type="text"  className="contact email" placeholder="Phone" name="user_subject" />
              <input  type="text"  className="contact subject" placeholder="Email" name="user_email" />
              
              <button className="btn contact pointer">Submit</button>
              {done && "Thank you..."}
            </form>
       
            </div>
            </div>
            </div>
      </div>
    );
  };
  
  export default Contact;
