function sumArray(a)
{
let marks=[90,78,65,98]
let sum=0
 for(let i=0; i<a.length; i++)
 {
    sum=sum+marks[i]
 }
 return sum
}

let mark=[90,78,65,98]
let res=sumArray(mark)
console.log(res)