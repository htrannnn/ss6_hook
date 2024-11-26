const studentList = [
	{
		id: 1,
		name: "stu1",
		phone: "0987654321",
		email: "stu1@gmail.com",
	},
	{
		id: 2,
		name: "stu2",
		phone: "0123456789",
		email: "stu2@gmail.com",
	},
	{
		id: 3,
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

export function deleteByName(name) {
	for (let i = 0; i < studentList.length; i++) {
		if (studentList[i].name === name) {
			studentList.splice(i, 1);
			break;
		}
	}
}
