import React, { Component } from 'react';

class Items extends Component {

	changeStatus(event) {
		this.props.setNewStatus(event.target.getAttribute("data-idItem"));
	}

	render() {
		const items = this.props.items;
		const listItems = items.map((item) => { return (
			<li key={item.id}>
			<input 
				defaultChecked={item.status} 
				type="checkbox" 
				onClick={this.changeStatus.bind(this)}
				data-idItem={item.id} /> 
				{item.content}
			</li>)
		});
		return (
			<ul> { listItems } </ul>
		);
	}
}

export default Items;