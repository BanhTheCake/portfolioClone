import React, { useState } from 'react';
import './Skills.scss';
import { images } from '../../constants';
import wrapperAnimate from '../../Wrapper/wrapperAnimate.js';
import { useEffect } from 'react';
import client, { urlFor } from '../../clientSanity';
import { motion } from 'framer-motion';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "skills"]';
        client
            .fetch(query)
            .then((data) => {
                setSkills(data);
            })
            .catch((err) => {
                console.log('err: ', err);
            });
    }, []);

    return (
        <div id="SKILLS">
            <div className="app__skills-title">
                <h3>Skills & Experiences</h3>
            </div>
            <div className="app__skills-box">
                <div className="app__skills-icons">
                    {skills &&
                        skills.length > 0 &&
                        skills.map((skill) => {
                            return (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    key={skill._id}
                                    className="app__skills-icon"
                                    style={{ backgroundColor: skill.bgColor }}
                                >
                                    <img src={urlFor(skill.icon)} alt="" />
                                </motion.div>
                            );
                        })}
                </div>
                <div className="app__experience">
                    <div className="app__experience-info">
                        <p className="year">2020</p>
                        <div className="app__experience-list">
                            <div className="app__experience-item">
                                <p>BanhTheCake</p>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__experience-info">
                        <p className="year">2021</p>
                        <div className="app__experience-list">
                            <div className="app__experience-item">
                                <p>BanhTheCake</p>
                                <p>Web Developer</p>
                            </div>
                            <div className="app__experience-item">
                                <p>BanhThefox</p>
                                <p>Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="app__experience-info">
                        <p className="year">2022</p>
                        <div className="app__experience-list">
                            <div className="app__experience-item">
                                <p>BanhTheCake & BanhTheMug</p>
                                <p>Fullstack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default wrapperAnimate(Skills, 'app__whitebg');
