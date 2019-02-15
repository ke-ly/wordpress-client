import React, { Component } from 'react'

export default class Locale extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
