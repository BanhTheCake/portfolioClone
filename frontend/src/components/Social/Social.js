import React from "react";
import { AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import './Social.scss'

const Social = () => {
  return (
    <div className="app__social">
        <div className="app__social-item">
            <AiFillLinkedin />
        </div>
        <div className="app__social-item">
            <BsFacebook />
        </div>
        <div className="app__social-item">
            <AiFillGithub />
        </div>
    </div>
  );
};

export default Social;
