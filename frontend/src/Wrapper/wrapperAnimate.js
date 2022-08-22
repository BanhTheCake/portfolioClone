import React from "react";
import { motion } from 'framer-motion'

const animateVar = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

const wrapperAnimate = (Components, classNameBG = 'app__primarybg') => function HOC() {
  return (
    <div
     className={`app__animate ${classNameBG}`}>
     <motion.div 
     variants={animateVar}
    initial='hidden'
    whileInView='visible'
    viewport={{once: true, margin: '-150px'}}>
      <Components />
     </motion.div>
    </div>
  );
};

export default wrapperAnimate;
