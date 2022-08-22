import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useFirstRender } from '../../customHook/useFirstRender';
import { useCallback } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const listMobileRef = useRef(null);
  const openBtnRef = useRef(null)
  
    useEffect(() => {

      
      const handleClick = (e) => {
        if (
            listMobileRef.current &&
            !openBtnRef.current.contains(e.target) &&
            !listMobileRef.current.contains(e.target)
        ) {
            setShow(false)
        }
      }
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <div id="app__navbar">
                <div className="background"></div>
                <div className="navbar__logo">
                    <img src={images.logo} alt="" />
                </div>
                <div className="navbar__list">
                    <div className="navbar__item">
                        <div />
                        <a href="#HOME">Home</a>
                    </div>
                    <div className="navbar__item">
                        <div />
                        <a href="#ABOUT">About</a>
                    </div>
                    <div className="navbar__item">
                        <div />
                        <a href="#WORKS">Works</a>
                    </div>
                    <div className="navbar__item">
                        <div />
                        <a href="#SKILLS">Skills</a>
                    </div>
                    <div className="navbar__item">
                        <div />
                        <a href="#CONTACTS">Contacts</a>
                    </div>
                </div>
                <div
                  ref={openBtnRef}
                    className="navbar__button-mobile"
                    onClick={() => setShow(!show)}
                >
                    <AiOutlineMenuFold />
                </div>
                    {show && (
                        <motion.div
                            ref={listMobileRef}
                            className="navbar__list-moblie"
                            initial={{ x: '100%' }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.6, type: 'spring' }}
                        >
                            <div
                                className="close"
                                onClick={() => setShow(!show)}
                            >
                                <IoIosCloseCircleOutline />
                            </div>
                            <div className="navbar__item-mobile">
                                <a onClick={() => setShow(!show)} href="#HOME">Home</a>
                            </div>
                            <div className="navbar__item-mobile">
                                <a onClick={() => setShow(!show)} href="#ABOUT">About</a>
                            </div>
                            <div className="navbar__item-mobile">
                                <a onClick={() => setShow(!show)} href="#WORKS">Works</a>
                            </div>
                            <div className="navbar__item-mobile">
                                <a onClick={() => setShow(!show)} href="#SKILLS">Skills</a>
                            </div>
                            <div className="navbar__item-mobile">
                                <a onClick={() => setShow(!show)} href="#CONTACTS">Contacts</a>
                            </div>
                        </motion.div>
                    )}
            </div>
        </>
    );
};

export default Navbar;
