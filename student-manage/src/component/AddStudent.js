import React, { useRef } from "react";
import { addNewStudent, getAllStudent, searchByName } from "../services/studentService";

function AddStudent({ handleIsLoading, setStudentList }) {
	//useRef: được sử dụng để tham chiếu đến các input
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const searchRef = useRef();

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

	const handleSearch = () => {
		setStudentList(() => [...searchByName(searchRef.current.value)]);
	};

	return (
		<>
			<h3>Add Customer</h3>
			<form>
				<div className="row ms-2">
					<label className="col-sm-1">Name:</label>
					<div className="col-sm-4">
						<input type="text" name="name" placeholder="Enter name" ref={nameRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Phone:</label>
					<div className="col-sm-4">
						<input type="text" name="phone" placeholder="Enter phone" ref={phoneRef} />
					</div>
				</div>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Email:</label>
					<div className="col-sm-4">
						<input type="text" name="email" placeholder="Enter email" ref={emailRef} />
					</div>
				</div>
				<button onClick={handleSave} type="button" value="submit" className="btn btn-secondary rounded-0 mb-3 mt-3">
					Submit
				</button>
				<div className="row ms-2 mt-2">
					<label className="col-sm-1">Search:</label>
					<div className="col-sm-4">
						<input type="text" name="search" placeholder="Enter to search" ref={searchRef} />

						<button onClick={handleSearch} type="button" value="search" className="btn btn-secondary rounded-0 ms-2 mb-2">
							Search
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default AddStudent;
