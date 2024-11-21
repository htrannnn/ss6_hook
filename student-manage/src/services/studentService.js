const studentList = [
	{
		name: "stu1",
		phone: "0987654321",
		email: "stu1@gmail.com",
	},
	{
		name: "stu2",
		phone: "0123456789",
		email: "stu2@gmail.com",
	},
	{
		name: "stu3",
		phone: "0918273645",
		email: "stu3@gmail.com",
	},
];

export function getAllStudent() {
	return studentList;
}

export function addNewStudent(student) {
	studentList.push(student);
}
