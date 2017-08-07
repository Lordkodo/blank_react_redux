import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
	static propTypes = {
		value: PropTypes.number,
		onAdd: PropTypes.func,
		onSub: PropTypes.func,
	};

	static defaultProps = {
		onAdd: () => {},
		onSub: () => {},
	}

	render() {
		return (
			<div className='Counter'>
				>> Value: {this.props.value}<br/>
				<button onClick={this.props.onAdd}>+</button>
				<button onClick={this.props.onSub}>-</button>
			</div>
		)
	}
}
