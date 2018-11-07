import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
      }
      
    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
    }

  render() {
    let menuActive = this.state.isToggleOn ? 'is-active' : '';
    return (
        <div className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a className={'navbar-burger'+menuActive} onClick={this.handleClick} role="button" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className={'navbar-end navbar-menu'+menuActive}>
                    <a href="#hero" className="navbar-item">Home</a>
                    <a href="#about" className="navbar-item">About</a>
                    <a href="#portfolio" className="navbar-item">Portfolio</a>
                    <a href="#contact" className="navbar-item">Follow Me</a>
                </div>
            </div>
        </div>
    );
  }
}


export default Header;