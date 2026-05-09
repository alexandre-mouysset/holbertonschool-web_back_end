export default function getStudentsByLocation(locationArray, city) {
	return locationArray.filter(studentLocation => studentLocation.location === city)
}
