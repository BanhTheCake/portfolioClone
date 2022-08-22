import React from "react";
import './Footer.scss'
import { images } from '../../constants'
import wrapperAnimate from "../../Wrapper/wrapperAnimate";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Email from '../../assets/email.png'
import Mobile from '../../assets/mobile.png'
import { SiMinutemailer } from 'react-icons/si'
import { BiMobileVibration } from 'react-icons/bi'

const Footer = () => {

  const [Loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setDone(true)
    }, 2000)
  }

  return (
    <div id="CONTACTS">
      <div className="app__footer-title">
        <h3>Take a Coffee & Chat With Me</h3>
      </div>
      <div className="app__footer-contact">
        <div className="app__footer-email">
          <a className="app__footer-contact-item" href="mailto:binhanh080103@gmail.com">
              <div className="icon">
                <SiMinutemailer />
              </div>
              <p>Banhthecake@gmail.com</p>
          </a>
        </div>
        <div className="app__footer-number">
          <a className="app__footer-contact-item" href="tel: +84 1234567">
              <div className="icon">
                <BiMobileVibration />
              </div>
              <p>(+84) 123 456 789</p>
          </a>
        </div>
      </div>
      { done ? <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} className="secret">BanhTheCake Luv You =^...^=</motion.div> : <form className="app__footer-feedback">
        <div className="app__footer-box">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="app__footer-box">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="app__footer-box app__footer-box-textarea">
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button onClick={handleSubmitForm}>{Loading ? 'Sending ...' : 'Send Message'}</button>
      </form> }
      <div className="author">
        BanhTheCake Luv You
      </div>
    </div>
  );
};

export default wrapperAnimate(Footer, 'app__whitebg');
