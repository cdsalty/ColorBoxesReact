
/* Create a function that takes in an ARRAY:
Then it should: 
       - pick a random number, from zero to the total length of the array.
       - Return the randomIndex from the array
*/

function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export { choice };