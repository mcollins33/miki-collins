import React from 'react';
import './About.css';

const About = () => {

    return (

        <div id="about">
            <section className="about container">
                <h1 className="is-size-2-mobile has-text-centered">About Me</h1>
                <div className="border"></div>
                <div className="columns is-centered is-vcentered">
                    <div className="column is-7 is-10-mobile is-offset-1-mobile">
                        <p>Hi! My name is Miki Collins. I was born and raised in Lakeland, GA. I have been married for 16 
                            years and am the mother of two amazing kids. I am a Mechanical Engineer by trade, graduating 
                            from Georgia Tech with a BME; however, my interests lie in arts and crafts. In my spare 
                            time I enjoy painting, scrapbooking, photography, crochet, and helping my kids with their projects.
                        </p>
                        <br />
                        <p>I also have a sense of adventure and love to travel. In recent years, I have been on multiple 
                            trips cruising the Carribean and enjoying learning about the heritage and culture in these areas. 
                            One of my most memorable trips was to Ocho Rios where I jumped off a 30' cliff.
                        </p>
                        <br />
                        <p>Having worked for the past 20 years in a manufacturing environment in engineering and management 
                            roles, I am excited to begin a new venture utilizing my artistic talents in coding and web development.
                        </p>
                    </div>
                    <div className="column is-3 is-hidden-mobile">
                    <figure className="image is-3x4">
                        <img className="mypic" src={require(`../../assets/miki.jpg`)} alt="Miki Collins" />
                    </figure>
                    </div>
                </div>
            </section>
        </div>
        

    );
};

export default About;
