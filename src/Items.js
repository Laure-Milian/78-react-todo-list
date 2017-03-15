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
		const items = this.state.items;
		const listItems = items.map((item) => { return <li key={item.id}> {item.content} </li> });
		return (
			<ul> { listItems } </ul>
		);
	}
}

export default Items;