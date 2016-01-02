"use strict";

var React = require('react');

var Header = React.createClass({
    render: function() {
        return <header>
                <div className="title">
                    <span className="first">Pete</span>
                    <span classname="last">Levine</span>
                </div>
                <div className="subTitle">
                    Hey! I'm Pete, a front end developer based in Raleigh, NC.
                </div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/peteralevine" class="in" 
                        title="LinkedIn Profile"><i class="inIcon"></i></a>
                    <a href="https://twitter.com/PeteLevineA" class="twitter" 
                        title="twitter profile"><i class="twitterIcon"></i></a>
                    <a href="mailto:pete@ionisix.com?Subject=Checked%20out%20your%20portfolio" 
                        class="email" title="email"><i class="emailIcon"></i></a>
                    <a href="https://github.com/PeteLevineA" class="github" 
                        title="github profile"><i class="githubIcon"></i></a>
                    <a href="http://codepen.io/PeteLevineA/" class="codepen" 
                        title="codepen profile"><i class="codepenIcon"></i></a>
                </div>
            </header>;
    }
});

module.exports = Header; 