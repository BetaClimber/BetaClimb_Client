import React, { Component } from 'react';
import { Power2, Back, TimelineLite, TimelineMax } from "gsap";

export class PreLoader extends Component {

  componentDidMount(){
    const TLDots = new TimelineMax({
      repeat: 1,
      oncomplete: this.loadContent
    });

    TLDots.staggerFromTo('.dot', 0.3, {
        y: 0,
        autoAlpha: 0
      }, {
        y: 20,
        autoAlpha: 1,
        ease: Back.easeInOut
      }, 0.05).fromTo('#preLoader', 0.3, {
        autoAlpha: 1,
        scale: 1.3
      }, {
        autoAlpha: 0,
        scale: 1,
        ease: Power2.easeNone
      }, 0.9
    );
  }

  render(){

    return (
      <div className="animate-wrapper">
        <div className="dots" id="preLoader">
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
          <div className="dot">.</div>
        </div>
      </div>
    );
  }
}
