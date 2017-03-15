import React, { Component } from 'react';

class Items extends Component {

	render() {
		const items = this.props.items;
		const listItems = items.map((item) => { return <li key={item.id}> {item.content} </li> });
		return (
			<ul> { listItems } </ul>
		);
	}
}

export default Items;