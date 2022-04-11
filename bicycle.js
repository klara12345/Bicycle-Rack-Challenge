function maxDistance(arr, n) {
	let count = 0; //counts how many zeros are in a row
	let maxDistance = 0; //keeps the max number of zeros found
    let pozmaxDistance = 0; //keeps the position for the max distance
	for (let i = 0; i < arr.length; i++) { 
		if(arr[i] == 0){  //checks if the element in the index is equal to zero,increment count
            count ++;
        }else if(arr[i] == 1){ //checks if the element in the index is equal to one
            if(count > maxDistance){  //if the current distance is larger than the count then give this value to the max field
                maxDistance = count
                pozmaxDistance = i - 1  //last position where zero is found
                count = 0  //restart counting the zeros
            }
        }
    }
    /*calculate midpoint of the position found */
    maxDistance = Math.floor(maxDistance / 2) 
    pozmaxDistance = pozmaxDistance - maxDistance 
    console.log(maxDistance)
    console.log(pozmaxDistance)
    return pozmaxDistance;
}
/*test part */
let arr = [1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0];
// let arr = [1,0,0,0,1,1];
let n = arr.length;
console.log(maxDistance(arr, n))