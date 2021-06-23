const array = [2, 3, 5, 12, 31, 11, 23, 0, -1, -4, 1, 2, 5, 6, 8, 9];
let count = 0;

function bubbleSort(array) {
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < array.length; j++) {
			if(array[j + 1] < array[j]) {
				let tmp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = tmp;
			}
			count++;
		}
	}
	return array;
}
console.log(array.length);
console.log(bubbleSort(array));
console.log(count);