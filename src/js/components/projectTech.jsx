"use strict";

var React = require('react');

var ProjectTech = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
		technologies: React.PropTypes.array
	},
	render: function() {
		return <div className="projectTech">
					<div class="title">{this.props.title}</div>
					<div class="technologies">
						{ 
							if(this.props.technologies) {
								this.props.technologies.map(function(tech) {
									return <div key={tech} className="tech">
											{tech}
											</div>;
								});
							}
						}
					</div>
				</div>;
	}
});

module.exports = ProjectTech;