const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, item) {
	for(let i = 0; i < array.length; i++) {
		count++;
		if (array[i] === item) {
			return i;
		}
	}
  return `Ничего не нашли!: ${null}`;
}
console.log(linearSearch(array, 9));
console.log(count);