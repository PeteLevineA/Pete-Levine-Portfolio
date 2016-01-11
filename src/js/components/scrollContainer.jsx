"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var offset = require('document-offset');

var ScrollContainer = React.createClass({
	propTypes: {
		viewOffset: React.PropTypes.number,
		scrollClass: React.PropTypes.string,
		activeOffsetDuration: React.PropTypes.number,
        scrolledIntoViewCallback: React.PropTypes.func,
        scrolledOutOfViewCallback: React.PropTypes.func
	},
	getDefaultProps: function() {
		return {
			activeOffsetDuration: 500,
            viewOffset: 0
		};
	},
	getInitialState: function() {
		return {
			className: this.props.scrollClass + ' inactive-end'
		};
	},
	componentDidMount: function() {
		var win = typeof window !== 'undefined' ? window : false;
		var doc = typeof document !== 'undefined' ? document : false;
		if( win ) {
			this.viewportHeight = Math.max(doc.documentElement.clientHeight, win.innerHeight || 0);
			win.addEventListener('scroll', this.handleScroll.bind(this, win));
            this.handleScroll(win);			
		}
	},
	render: function() {
		return <div className={this.state.className}>
				{this.props.children}
			</div>;
	},
	scrollY: null,
	scrollReady: false,
	viewportHeight: null,
	handleScroll: function(win) {
		if(win) {
			this.scrollY = win.pageYOffset;
			this.requestAnimationFrameWhenReady();
		}
	},
	requestAnimationFrameWhenReady: function() {
		if( !this.scrollReady ) {
			requestAnimationFrame(this.handleScrollCheck);
		}
        this.scrollReady = true;
	},
	handleScrollCheck: function() {
		var elem = ReactDOM.findDOMNode(this);
		var elemTop = offset(elem).top;
		var elemHeight = elem.offsetHeight;
		var elemBot = elemTop + elemHeight;
		var viewportBot = (this.scrollY + this.viewportHeight) - this.props.viewOffset;
		var self = this;
		if( elemTop < viewportBot && elemBot > this.scrollY ) {
            if(this.state.className.indexOf(' active') === -1) {
                // Call Callback if required when the element has been scrolled to
                if(this.props.scrolledIntoViewCallback && 
                    typeof this.props.scrolledIntoViewCallback === 'function') {
                    this.props.scrolledIntoViewCallback.call(null, this.props.scrollClass);        
                }
                this.setState({
                    className: this.props.scrollClass + ' active-start'
                });
                setTimeout(function() {
                    self.setState({
                        className: self.props.scrollClass + ' active-end'
                    });
                }, this.props.activeOffsetDuration);
            }
		}
		else {
            if( this.state.className.indexOf(' active') !== -1 )
            {
                // Call Callback if required when the element has been scrolled away
                if(this.props.scrolledOutOfViewCallback && 
                    typeof this.props.scrolledOutOfViewCallback === 'function') {
                    this.props.scrolledOutOfViewCallback.call(null, this.props.scrollClass);        
                }
                this.setState({
                    className: this.props.scrollClass + ' inactive-start'
                });
                setTimeout(function() {
                    self.setState({
                        className: self.props.scrollClass + ' inactive-end'
                    });
                }, this.props.activeOffsetDuration);
            }
		}
		this.scrollReady = false;
	}
});

module.exports = ScrollContainer;