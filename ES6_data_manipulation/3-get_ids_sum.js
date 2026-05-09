export default function getStudentIdsSum(studentList) {
	return studentList.reduce((sum, students) => sum + students.id, 0)
}