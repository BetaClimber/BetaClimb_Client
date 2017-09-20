import React, { Component } from 'react';
import { Power2, Back, Bounce, TimelineLite, TimelineMax } from "gsap";

export class PreLoader extends Component {

  componentDidMount() {
    const TLDots = new TimelineMax({
      repeat: 2,
      oncomplete: this.loadContent
    });

    TLDots.staggerFromTo('.dot', 0.5, {
        y: 0,
        autoAlpha: 0,
      }, {
        y: 20,
        autoAlpha: 1,
        ease: Back.easeInOut
      }, 0.05).fromTo('#preLoader', 1.5, {
        autoAlpha: 1,
        scale: 1.3
      }, {
        autoAlpha: 0,
        scale: 1,
        ease: Power2.easeNone,
        rotation: 540
      }, 0.9
    );
  }

  loadContent() {
    const content = document.getElementById('animate-wrapper');
    const Tl = new TimelineLite();

    Tl.set(content, {
      autoAplpha: 1,
      rotation: 360,
      ease: Bounce.easeOut
    });
  }

  render() {
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
