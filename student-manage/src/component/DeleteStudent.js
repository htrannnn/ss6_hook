import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudent(props) {
	const handleClose = () => {
		props.closeModal([]);
	};

	const handleDeleteStudent = (student) => {
		props.showDeleteStudent(student);
	};

	return (
		<>
			<Modal show={props.show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Bạn có muốn xóa học viên này không?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Đóng
					</Button>
					<Button variant="danger" onClick={() => props.deleteStudent(props.student)}>
						Xóa
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteStudent;
