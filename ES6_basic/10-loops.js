export default function appendToEachArrayValue(array, appendString) {
	let idx = 0;

  for (let x of array) {
    array[idx] = appendString + x;
	idx++;
  }

  return array;
}
