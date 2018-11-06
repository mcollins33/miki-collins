import React, { Component } from 'react';
import './Portfolio.css';
import Projects from '../../data/projects.js';

class Portfolio extends Component {
   state = {
    projects: []
   }

componentDidMount() {
   this.setState ({
    projects: Projects
    });
}      
    render() {
        return (
            <div id="portfolio" className="portfolio-background">
                <section className="portfolio container">
                    <h1 className="is-size-2-mobile">Portfolio</h1>
                    <div className="border"></div>
                        <div className="tile is-ancestor">
                            <div className="tile is parent wrap columns is-centered">
                                {Object.keys(this.state.projects).map((item, i) => (
                                    <div className=" tile is-child box column is-4" key={i}>
                                        <div className="portfolio-image">
                                            <a href={this.state.projects[item].link}>
                                                <img src={require(`../../assets/${this.state.projects[item].image}`)} alt={this.state.projects[item].name} />
                                            </a>
                                        </div>
                                        <h2 className="title has-text-centered is-hidden-mobile">{this.state.projects[item].name}</h2>
                                        <div className="is-hidden-mobile padding-5">{this.state.projects[item].desc}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;