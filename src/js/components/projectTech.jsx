"use strict";

var React = require('react');

var ProjectTech = React.createClass({
	propTypes: {
		tech: React.PropTypes.array,
        subTitle: React.PropTypes.string
	},
	render: function() {
		return <div className="projectTech">
					<div className="techTitle">{this.props.subTitle}</div>
                    <div className="techList">
                    {this.props.tech.map(function(tech) {
                                return <div key={tech} className="tech">
                                        {tech}
                                        </div>;
                    })}
                    </div>
				</div>;
	}
});

module.exports = ProjectTech;