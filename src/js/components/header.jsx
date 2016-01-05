"use strict";

var React = require('react');
var ScrollContainer = require('./scrollContainer.jsx');

var Header = React.createClass({
    render: function() {
        return <header>
                <div className="title">
                    <span className="first">Pete </span>
                    <span className="last">Levine</span>
                </div>
                <div className="subText">
                    <div className="subTextTitle">Front end developer. Raleigh, NC</div>
                    <div className="intro">
                        Hey! I'm Pete.
                        I've been writing software for the web for 10+ years now.
                        Check out what I'm working on and get in contact if
                        you think I'd be a fit with your company or project!
                    </div>
                </div>
                <ScrollContainer scrollClass="links" activeOffsetDuration={500}>
                    <a href="https://github.com/PeteLevineA" className="github" 
                        title="github profile"><i className="githubIcon"></i></a>
                    <a href="http://codepen.io/PeteLevineA/" className="codepen" 
                        title="codepen profile"><i className="codepenIcon"></i></a>
                    <a href="https://www.linkedin.com/in/peteralevine" className="in" 
                        title="LinkedIn Profile"><i className="inIcon"></i></a>
                    <a href="https://twitter.com/PeteLevineA" className="twitter" 
                        title="twitter profile"><i className="twitterIcon"></i></a>
                    <a href="mailto:pete@ionisix.com?Subject=Checked%20out%20your%20portfolio" 
                        className="email" title="email"><i className="emailIcon"></i></a>
                </ScrollContainer>
            </header>;
    }
});

module.exports = Header; 