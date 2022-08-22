import React from 'react';
import './About.scss';
import { images } from '../../constants'
import wrapperAnimate from '../../Wrapper/wrapperAnimate';

const About = () => {
    return (
        <div id="ABOUT">
            <div className="app__about-title">
                <h2>
                    I Know that <span>Good Design</span>
                </h2>
                <h2>
                    Means <span>Good Business</span>
                </h2>
            </div>
            <div className="app__about-list">
            <div className='app__about-wrapper'>
                <div className="app__about-item">
                    <div className="app__about-img">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="app__about-info">
                        <h3>Web Designer</h3>
                        <p>
                            I am a web designer with a passion for creating
                            beautiful and functional web applications.
                        </p>
                    </div>
                </div>
                </div>
                <div className='app__about-wrapper'>
                <div className="app__about-item">
                    <div className="app__about-img">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="app__about-info">
                        <h3>Web Designer</h3>
                        <p>
                            I am a web designer with a passion for creating
                            beautiful and functional web applications.
                        </p>
                    </div>
                </div>
                </div>
                <div className='app__about-wrapper'>
                <div className="app__about-item">
                    <div className="app__about-img">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="app__about-info">
                        <h3>Web Designer</h3>
                        <p>
                            I am a web designer with a passion for creating
                            beautiful and functional web applications.
                        </p>
                    </div>
                </div>
                </div>
                <div className='app__about-wrapper'>
                <div className="app__about-item">
                    <div className="app__about-img">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="app__about-info">
                        <h3>Web Designer</h3>
                        <p>
                            I am a web designer with a passion for creating
                            beautiful and functional web applications.
                        </p>
                    </div>
                </div>
                </div>
                <div className='app__about-wrapper'>
                <div className="app__about-item">
                    <div className="app__about-img">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="app__about-info">
                        <h3>Web Designer</h3>
                        <p>
                            I am a web designer with a passion for creating
                            beautiful and functional web applications.
                        </p>
                    </div>
                </div>
                </div>
                <div className='app__about-wrapper'>
                <div className="app__about-item">
                    <div className="app__about-img">
                        <img src={images.about01} alt="" />
                    </div>
                    <div className="app__about-info">
                        <h3>Web Designer</h3>
                        <p>
                            I am a web designer with a passion for creating
                            beautiful and functional web applications.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default wrapperAnimate(About, 'app__whitebg');
