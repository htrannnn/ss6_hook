import React, { useEffect, useState } from "react";
import StudentItem from "./StudentItem";
import { getAllStudent } from "../services/studentService";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";

function StudentList() {
	const [studentList, setStudentList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	//isLoading khởi tạo với giá trị mặc định là False

	const [show, setShow] = useState(false);
	const [selectedStudent, setSelectedStudent] = useState();

	const handleIsLoading = () => {
		setIsLoading((prevState) => !prevState);
	};
	//hàm này được gọi để thay đổi trạng thái của isLoading để đồng bộ giao diện với dữ liệu
	//setIsLoading nhận vào một callback function, trong đó: prevState nhận về giá trị hiện tại của isLoading: false, lật ngược lại sang true và ngược lại.

	const showModalDelete = (student) => {
		setShow(true);
		setSelectedStudent();
		console.log(student);
	};

	const closeModal = () => {
		setShow(false);
		setSelectedStudent();
	};

	const deleteStudent = (student) => {
		setStudentList((previousList) => previousList.filter((students) => students.name !== student.name));
	};

	useEffect(() => {
		setStudentList(getAllStudent());
	}, [isLoading]);
	//effect chỉ chạy khi isLoading được cập nhật. Chạy: cập nhật lại danh sách getAllStudent khi isLoading được cập nhật

	return (
		<div className="container">
			<div className="card">
				<div className="card-header">
					<h1>Student List</h1>
				</div>
				<div className="card-body">
					<AddStudent handleIsLoading={handleIsLoading} />
					<table className="table table-striped table-secondary">
						<thead>
							<tr>
								<th>Name</th>
								<th>Phone</th>
								<th>Email</th>
								<th className="text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{studentList.map((student) => (
								<StudentItem key={student.name} student={student} showModalDelete={showModalDelete} />
							))}
						</tbody>
					</table>
					<DeleteStudent show={show} closeModal={closeModal} deleteStudent={deleteStudent} student={selectedStudent} />
				</div>
			</div>
		</div>
	);
}

export default StudentList;
