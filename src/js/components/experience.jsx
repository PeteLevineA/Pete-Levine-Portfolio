"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ScrollContainer = require('./scrollContainer.jsx');
var Planet = require('./planet.jsx');
var ScrollContainer = require('./scrollContainer.jsx');

var Experience = React.createClass({
    render: function() {
        return <section className="experience">
                <Planet title="Open Source" subTitle="" iconImg="images/earth.svg">
                    - Projects in ReactJS, Less, NodeJS & MongoDB
                </Planet>
                <Planet title="Caterpillar" jobTitle="Senior Software Engineer" subTitle="Feb. 15 - Current" iconImg="images/mars.svg">
                    - Front end development for assembly line applications<br />
                    - Tech: Knockoutjs, Bootstrap, jQuery, HTML5 & CSS3<br />
                    - Code reviewer, mentor, helped develop the team's software process
                </Planet>
                <Planet title="Innovatient" jobTitle="Senior Software Developer" subTitle="Sep. 13 - Feb. 15" iconImg="images/jupiter.svg">
                    - Front end development for patient engagement applications<br />
                    - Front end: HTML5 & CSS3 Responsive Apps, jQuery, Light AngularJS<br />
                    - Back end: .Net MVC RESTful Clinical App Integration, C#, SQL<br />
                    - Wore many hats in a less than ten person startup
                </Planet>
                <Planet title="Allscripts" jobTitle="Software Engineer to Senior Software Engineer" subTitle="Feb. 08 - Sep. 13" iconImg="images/saturn.svg">
                    - Front end development for hospital healthcare<br />
                    - Front end: jQuery, Telerik, VanillaJS
                    - Back end: C#, SQL Server<br />
                    - Trained others on Front-End dev. Ran Lunch and Learns
                </Planet>
                <Planet title="Moving Pictures" jobTitle="Web Developer" subTitle="Feb. 07 to Jan. 08" iconImg="images/neptune.svg">
                    - Front end development for healthcare marketing<br />
                    - Tech: Vanilla HTML, CSS & Javascript 
                </Planet>
                <Planet title="Covista Communications" jobTitle="Web Developer" subTitle="Aug. 06 to Jan. 07" iconImg="images/mars.svg">
                    - Front end internal app development for communications<br />
                    - Tech: Vanilla HTML, CSS & Javascript
                </Planet>
            </section>;
    },
    ScrollExperienceOutOfView: function(elemClass) {
        var rocket = ReactDOM.findDOMNode(this.refs.rocket);
        rocket.className = elemClass;
    }
});

module.exports = Experience;