export default function updateStudentGradeByCity(studentList, city, newGrades) {
	return studentList.filter(x => x.location === city)
		.map(x => {
			const gradeObj = newGrades.find(g => g.studentId === x.id)
				if (gradeObj) {
					return {...x, grade: gradeObj.grade}
				}
				else {
					return {...x, grade: "N/A"}
				}
		}
		)
}