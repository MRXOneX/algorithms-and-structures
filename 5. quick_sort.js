const array = [2, 3, 5, 12, 31, 11, 23, 0, -1, -4, 1, 2, 5, 6, 8, 9];
let count = 0;

function quickSort(array) {
	if(array.length <= 1) {
		return array;
	}
	let pivotIndex = Math.floor(array.length / 2);
	let pivot = array[pivotIndex];
	let less = [];
	let greater = [];
	for(let i = 0; i < array.length; i++) {
		count++;
		if(i === pivotIndex)
			continue;
		if(array[i] < pivot) {
			less.push(array[i]);
		}else {
			greater.push(array[i]);
		}
		count++;
	}
	return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(array.length);
console.log(quickSort(array));
console.log(count);