function search(a, k) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === k) {
            return i;   // return immediately if found
        }
    }
    return "not found";  // return after loop ends
}

let arr = [10, 20, 30, 40];

let k1 = 10;
let res1 = search(arr, k1);
console.log(k1, res1);