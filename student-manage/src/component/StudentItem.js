import React from "react";

function StudentItem(props) {
	const { id, name, phone, email } = props.student;

	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td className="text-center">
				<button className="btn btn-sm btn-secondary rounded-0 me-2">Edit</button>
				<button className="btn btn-sm btn-secondary rounded-0" onClick={() => props.showModalDelete(props.student)}>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default StudentItem;
