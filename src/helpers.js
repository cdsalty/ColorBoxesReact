
/* Create a function that will return a random item from a list */

function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export { choice };