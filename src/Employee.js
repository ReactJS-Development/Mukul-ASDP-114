import React, { Component } from 'react';
import Data from './Data';

class Employee extends Component {
	constructor (props) {
	super(props);
	this.state = {emp: [{firstName: "Mukul", lastName: "Sharma", address: "Hisar"},
				 	{firstName: "Surender", lastName: "Sharma", address: "Hisar"},
				  	{firstName: "Sanjeev", lastName: "Sharma", address: "Hisar"}], 
				 };
}

onfNameChangeHandler = (event) => {
		this.setState({firstName : event.target.value});
	}


onlNameChangeHandler = (event) => {
		this.setState({lastName : event.target.value});
	}


onAddChangeHandler = (event) => {
		this.setState({address : event.target.value});
	}

	onClickButton = () => {
		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const address = this.state.address;
		const newData = this.state.emp.concat({firstName, lastName, address});
		this.setState({emp:newData,firstName:"", lastName:"", address:""});
	}

	render () {
		return (
			<div>
				<Data onClickButton={this.onClickButton} onfNameChangeHandler = {this.onfNameChangeHandler} 
				onlNameChangeHandler = {this.onlNameChangeHandler} onAddChangeHandler = {this.onAddChangeHandler} 
				newfName={this.state.firstName} newlName={this.state.lastName} newAdd={this.state.address}
				emp={this.state.emp} />
			</div>
		)
	}
}
export default Employee;