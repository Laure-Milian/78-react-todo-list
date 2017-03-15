import React, { Component } from 'react';

class Items extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			items:
			[
				{
					id: 1,
					content: "Manger"
				},
				{
					id: 2,
					content: "Boire"
				},
				{
					id: 3,
					content: "Respirer"
				}
			]
		}
	}

	render() {
		return (
			<ul>
				<li> {this.state.items[0].content} </li>
				<li> {this.state.items[1].content} </li>
				<li> {this.state.items[2].content} </li>
			</ul>
			)
	}
}

export default Items;