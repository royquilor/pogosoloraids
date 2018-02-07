import React from 'react';
import './Hero.css'

const Hero = (props) => {
  return (
    <div className="w-100 cf tc-m hero pa3 pv5">
      <div className="mw9 center tl tc-ns ">
        <div className="tl tc-ns">
          <h1 className="f4 fw6 f1-ns lh-title mb3 mt0">SoloRaid</h1>
          <p className="f5 f5-ns lh-copy measure center db">Pokemon go stuff gathered by a community.</p>
        </div>
        <div className="tl tc-ns mb4">
          <a className="dib submit pv2 ph3 pv3-ns ph4-ns " href="">Submit a record</a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
