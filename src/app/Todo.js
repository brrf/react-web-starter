import React, { Component } from 'react';

export class Todo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			value: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleValue = this.handleValue.bind(this);
	}

	handleSubmit (e) {
		const updatedTodos = [...this.state.todos, this.state.value]
		console.log(updatedTodos)
		this.setState({
			todos: updatedTodos,
			value: ''
		})
	}

	handleValue (e) {
		this.setState({
			value: e.target.value
		})
	}

	render() {
	return (
	  <div>
	  	<h1>Todo List</h1>
			<ul>
				{this.state.todos.map(todo => 
					<li key={todo}>
						{todo}
					</li>
				)}
			</ul>
			<input type='text' 
				   value={this.state.value}
				   onChange={this.handleValue}
				   placeholder='New Todo'
			/>
			<button onClick={this.handleSubmit}>Submit Todo!</button>
	  </div>
	);
	}
}
