import React, { useRef } from "react";
import { addNewStudent, getAllStudent } from "../services/studentService";

function AddStudent({ handleIsLoading }) {
	//useRef: được sử dụng để tham chiếu đến các input
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();

	const handleSave = (event) => {
		event.preventDefault();
		addNewStudent({
			name: nameRef.current.value,
			phone: phoneRef.current.value,
			email: emailRef.current.value,
		});
		console.log(getAllStudent());
		handleIsLoading();
	};
	return (
		<>
			<h3>Add Customer</h3>
			<form>
				<div className="row ms-2">
					<label className="col-sm-1">Name:</label>
					<div className="col-sm-4">
						<input type="text" name="name" ref={nameRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Phone:</label>
					<div className="col-sm-4">
						<input type="text" name="phone" ref={phoneRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Email:</label>
					<div className="col-sm-4">
						<input type="text" name="email" ref={emailRef} />
					</div>
				</div>
				<button onClick={handleSave} type="button" value="Submit" className="btn btn-secondary rounded-0 mb-3 mt-3">
					Submit
				</button>
			</form>
		</>
	);
}

export default AddStudent;
