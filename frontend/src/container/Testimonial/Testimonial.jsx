import React from 'react';
import './Testimonial.scss';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { images } from '../../constants';
import { useEffect } from 'react';
import client, { urlFor } from '../../clientSanity';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import wrapperAnimate from '../../Wrapper/wrapperAnimate'
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

const Testimonial = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [currentIndexFeedback, setCurrentIndexFeedback] = useState(0);
    const [currentFeedback, setCurrentFeedback] = useState({});
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        client
            .fetch(query)
            .then((data) => {
                setFeedbacks(data);
                setCurrentFeedback(data[0]);
            })
            .catch((err) => {
                console.log('err: ', err);
            });
    }, []);

    const handlePrev = () => {
        const newIndex =
            currentIndexFeedback === 0
                ? feedbacks.length - 1
                : currentIndexFeedback - 1;
        setCurrentIndexFeedback(newIndex);
    };

    const handleNext = () => {
        const newIndex =
            currentIndexFeedback === feedbacks.length - 1
                ? 0
                : currentIndexFeedback + 1;
        setCurrentIndexFeedback(newIndex);
    };

    useEffect(() => {
      setCurrentFeedback(feedbacks[currentIndexFeedback])
    }, [currentIndexFeedback, feedbacks])

    return (
        <div id="TESTIMONIAL">
            <div className="app__testimonial-wrapper">
                {currentFeedback && Object.keys(currentFeedback).length > 0 && (
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentFeedback._id}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{duration: 0.2}}
                            className="app__testimonial-box"
                        >
                            <div className="app__testimonial-img">
                                <img
                                    src={urlFor(currentFeedback.imgurl)}
                                    alt=""
                                />
                            </div>
                            <div className="app__testimonial-feedback">
                                <p>{currentFeedback.feedback}</p>
                                <div className="app__testimonial-author">
                                    <p>{currentFeedback.name}</p>
                                    <p>{currentFeedback.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
            <div className="app__testimonial-arrow">
                <div className="left arrow" onClick={handlePrev}>
                    <BsBoxArrowInLeft />
                </div>
                <div className="right arrow" onClick={handleNext}>
                    <BsBoxArrowInRight />
                </div>
            </div>
            <div className="app__testimonial-logo app__testimonial-logo-web">
                <div className="logo">
                    <img src={images.amazon} alt="" />
                </div>
                <div className="logo">
                    <img src={images.nb} alt="" />
                </div>
                <div className="logo">
                    <img src={images.skype} alt="" />
                </div>
                <div className="logo">
                    <img src={images.spotify} alt="" />
                </div>
            </div>
        </div>
    );
};

export default wrapperAnimate(Testimonial);
