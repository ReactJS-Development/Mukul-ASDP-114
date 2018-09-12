import React, { Component } from 'react';

const Data = ({emp, newfName, newlName, newAdd, newEmployee, onfNameChangeHandler, onlNameChangeHandler, onAddChangeHandler, onClickButton}) => {
	return (
		<div>
			<h3>Here is the Emloyee data</h3>
			{
				emp.map((name, index) =>(
				<p>{index+1} {name.firstName} {name.lastName} {name.address}</p>)
				)
			}
			firstName: <input type="text" value={newfName} onChange={onfNameChangeHandler}></input><br/><br/>
			lastName: <input type="text" value={newlName} onChange={onlNameChangeHandler}></input><br/><br/>
			address: <input type="text" value={newAdd} onChange={onAddChangeHandler}></input><br/><br/>
			<button onClick={onClickButton}>Add New Emloyee</button>
		</div>
	)
}
export default Data;