const array = [3, 2, 11, 33, 12, -5, 0, -1, 34, 4, 2, 12, 45, 14, 4, 1];
let count = 0;

function selectionSort(array) {
	for(let i = 0; i < array.length; i++) {
		let indexMin = i;
		for(let j = i+1; j < array.length; j++) {
			if(array[j] < array[indexMin]){
				indexMin = j;
			}
			count++;
		}
		let tmp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = tmp;
	}
	return array;
}
console.log(selectionSort(array));
console.log(array.length);
console.log(count);
//------------
let newArray = array.sort((a, b) => {return a - b;});
console.log(newArray);