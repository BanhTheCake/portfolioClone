import React from 'react';
import './Header.scss';
import { images } from '../../constants';
import { motion } from 'framer-motion';

const headerAnimeFirstVar = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

const headerAnimeSecondVar = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  }


const Header = () => {
    return (
        <div id="HOME">
            <motion.div className="header__text">
                <motion.div
                    className="header__text-hello"
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <p>Hello, I am</p>
                    <p>👋 BanhTheCake</p>
                </motion.div>
                <motion.div
                    className="header__text-work"
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <p>Web developer</p>
                    <p>Freelancer</p>
                </motion.div>
            </motion.div>
            <div className="header__avatar">
                <motion.div
                    variants={headerAnimeFirstVar}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="header__avatar-background"
                >
                    <img src={images.circle} alt="" />
                </motion.div>
                <motion.img variants={headerAnimeFirstVar}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} src={images.profile} alt="" />
            </div>
            <motion.div
               variants={headerAnimeSecondVar}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className="header__icon"
            >
                <motion.div variants={headerAnimeSecondVar} className="header__icon-box">
                    <img src={images.flutter} alt="" />
                </motion.div>
                <motion.div variants={headerAnimeSecondVar} className="header__icon-box">
                    <img src={images.redux} alt="" />
                </motion.div>
                <motion.div variants={headerAnimeSecondVar} className="header__icon-box">
                    <img src={images.sass} alt="" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Header;
