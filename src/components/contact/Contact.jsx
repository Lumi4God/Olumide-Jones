import React, { useEffect } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
//emailJS
import emailjs from 'emailjs-com'
//popup-modal
import Popup from 'reactjs-popup';
//aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  //aos 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sf3m32p', 'template_mw0solv', form.current, 'AaxS3T8QNhAUuPLEx')

    e.target.reset()
  };

  return (
    <section id='contact' data-aos="fade-right">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>olumideyjones@yahoo.com</h5>
            <a href="mailto:olumideyjones@yahoo.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>lumicode</h5>
            <a href="https://m.me/ernest.achiever" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+4915215114339</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915215114339" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* FORM */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          
          <Popup trigger={<button type='submit' className='btn btn-primary'><span className='span'>Send Message</span></button>}modal nested>
              {close => (
                <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Message sent successfully </div>
                <div className="content">
                  {' '}
                  Thanks for contacting me, i shall reply you immediately.
                </div>
                {/*ANOTHER BUTTON TO CLOSE POPUP IF YOU WANT <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div> */}
              </div>
            )}
          </Popup>
          {/*THE BUTTON BEFORE POPUP <button type='submit' className='btn btn-primary'><span className='span'>Send Message</span></button> */}
        </form>
      </div>
    </section>
  )
}

export default Contact