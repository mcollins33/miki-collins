import React, { Component } from 'react';
import './Hero.css';

const Hero = () => {

    return (

        <div id="hero">
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column has-text-centered title-border">
                            <div className="title-box">
                                <h1 className="is-size-1-mobile">
                                    Miki Collins
                                </h1>
                                <h2 className="is-size-5-mobile">
                                    Web Developer
                                </h2>
                            </div>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    );
};

export default Hero;