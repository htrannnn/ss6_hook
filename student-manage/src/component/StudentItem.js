import React, { useState } from "react";

function StudentItem(props) {
	const { name, phone, email } = props.student;
	const { deleteStudent, setDeleteStudent } = useState();

	const handleShowModal = (student) => {
		props.showModalDelete(student);
	};

	const showDeleteStudent = (student) => {
		setDeleteStudent((prevList) => prevList.filter((students) => students.name !== student.name));
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td className="text-center">
				<button className="btn btn-sm btn-secondary rounded-0 me-2">Edit</button>
				<button
					className="btn btn-sm btn-secondary rounded-0"
					onClick={handleShowModal}
					showDeleteStudent={showDeleteStudent}
					deleteStudent={deleteStudent}
				>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default StudentItem;
