import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteStudent(props) {
	return (
		<>
			<Modal show={props.show} onHide={props.closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Bạn có muốn xóa học viên {props.student.name} không?</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={props.closeModal}>
						Đóng
					</Button>
					<Button variant="danger" onClick={props.deleteStudent}>
						Xóa
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteStudent;
