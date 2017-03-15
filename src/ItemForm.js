import React, { Component } from 'react';

class ItemForm extends Component {
	
	constructor(props) {
		super(props);
		this.textInput = null;
		this.newItems = []
	}

	handleClick(event) {
		event.preventDefault();
		let newItem = {
			id: Date.now(),
			content: this.textInput.value,
			status: false
		}
		this.newItems.push(newItem);
		this.textInput.value = "";
		this.props.addItems(this.newItems);
	}

	render() {
		return (
			<form>
				<div>
					<input 
						type="text"
						ref={ (input) => {this.textInput = input} }>
					</input>
				</div>
				<div>
					<input 
						type="submit" 
						value="Ajouter un item"
						onClick={this.handleClick.bind(this)} >
					</input>
				</div>
			</form>
		)
	}

}


export default ItemForm;