"use strict";

var React = require('react');

var TextMask = React.createClass({
    propTypes: {
        idName: React.PropTypes.string
    },
    render: function() {
        return <div className="textMask">
                    <svg>
                        <defs>
                            <mask id={'mask' + this.props.idName} x="0" y="0" 
                                width="100%" height="100%">
                                <rect className="alpha" id={'alpha' + this.props.idName} x="0"
                                    y="0" width="100%" height="100%" />
                                <text id={'text' + this.props.idName} x="50%"
                                    y="0" />
                            </mask>
                        </defs>
                        <rect className="base" id={'base'+this.props.idName} x="0" y="0" width="100%"
                            height="100%" style={{mask: 'mask'+this.props.idName}} />
                    </svg>
                </div>;
    }
});

module.exports = TextMask;