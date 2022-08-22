import React from 'react';
import './Work.scss';
import { images } from '../../constants';
import wrapperAnimate from '../../Wrapper/wrapperAnimate';
import { IoEyeSharp } from 'react-icons/io5';
import { AiFillGithub } from 'react-icons/ai';
import client, { urlFor } from '../../clientSanity';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Work = () => {
    const [filter, setFilter] = useState('All');
    const [allWorks, setAllWorks] = useState([]);
    const [filterWorks, setFilterWorks] = useState([]);
    const [animate, setAnimate] = useState({});
    const [isfirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const query = '*[_type == "works"]';
        client
            .fetch(query)
            .then((data) => {
                setAllWorks(data);
                setFilterWorks(data);
            })
            .catch((err) => {
                console.log('err: ', err);
            });
    }, []);

    useEffect(() => {
        if (isfirstRender) {
            setIsFirstRender(false);
            return;
        }
        setAnimate({ y: [0, 50], opacity: [1, 0] });
        const clear = setTimeout(() => {
            if (filter !== 'All') {
                const currentArray = allWorks.filter((work) =>
                    work.tags.includes(filter)
                );
                setFilterWorks(currentArray);
                setAnimate({ y: [50, 0], opacity: [0, 1] });
            } else {
                setFilterWorks(allWorks);
                setAnimate({ y: [50, 0], opacity: [0, 1] });
            }
        }, 500);
        return () => {
            if (clear) {
                clearTimeout(clear);
            }
        };
    }, [filter]);

    const handleChangeFilter = (item) => {
        setFilter(item);
    };

    return (
        <div id="WORKS">
            <div className="app__works-title">
                <h3>
                    My Creative <span>Portfolio</span> Section
                </h3>
            </div>
            <div className="app__works-tags">
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map(
                    (item) => {
                        return (
                            <div
                                key={`app__works-tags-${item}`}
                                className={`app__works-tag ${
                                    item === filter ? 'active' : ''
                                }`}
                                onClick={() => handleChangeFilter(item)}
                            >
                                {item}
                            </div>
                        );
                    }
                )}
            </div>
            <motion.div
                className="app__works-wrapper"
                animate={animate}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {filterWorks &&
                    filterWorks.length > 0 &&
                    filterWorks.map((item) => {
                        return (
                            <div
                                key={item._id}
                                className="app__works-item-wrapper"
                            >
                                <div className="app__works-item">
                                    <div className="app__works-img">
                                        <img src={urlFor(item.imgUrl)} alt="" />
                                        <div className="app__works-img-link">
                                            <div className="app__works-link-icon">
                                                <IoEyeSharp />
                                            </div>
                                            <div className="app__works-link-icon">
                                                <AiFillGithub />
                                            </div>
                                        </div>
                                        <div className="app__works-img-tag">
                                            {item.tags[0]}
                                        </div>
                                    </div>
                                    <div className="app__works-info">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </motion.div>
        </div>
    );
};

export default wrapperAnimate(Work);
