"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ScrollContainer = require('./scrollContainer.jsx');
var Planet = require('./planet.jsx');
var ScrollContainer = require('./scrollContainer.jsx');

var Experience = React.createClass({
    render: function() {
        return <section className="experience">
                <Planet title="My Next Adventure" subTitle="" iconImg="images/earth.svg">
                    
                </Planet>
                <Planet title="Caterpillar" jobTitle="Senior Software Engineer" subTitle="Feb. 15 - Current" iconImg="images/mars.svg">
                    - Front end development for assembly line applications<br />
                    - Tech: Knockoutjs, Bootstrap, jQuery, HTML5 & CSS3
                </Planet>
                <Planet title="Innovatient" jobTitle="Senior Software Developer" subTitle="Sep. 13 - Feb. 15" iconImg="images/jupiter.svg">
                    - Front end development for patient engagement applications<br />
                    - Front end Tech: HTML5 & CSS3 Responsive Apps, jQuery, Light AngularJS<br />
                    - Back end Tech: .Net MVC RESTful Clinical App Integration, C#, WCF, SQL Server 
                </Planet>
                <Planet title="Allscripts" jobTitle="Software Development Engineer to Senior Software Development Engineer" subTitle="Feb. 08 - Sep. 13" iconImg="images/saturn.svg">
                    - Front end development for hospital healthcare<br />
                    - Front end Tech: jQuery, Telerik, VanillaJS<br />
                    - Back end Tech: C#, SQL Server
                </Planet>
                <Planet title="Moving Pictures" jobTitle="Web Developer" subTitle="Feb. 07 to Jan. 08" iconImg="images/neptune.svg">
                    - Front end development for a marketting firm<br />
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