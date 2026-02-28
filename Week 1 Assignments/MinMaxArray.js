//sum of marks
let marks=[90,78,65,98]
let min=marks[0]

for(let i=0; i<4; i++)
{
    if(marks[i]<min)
        min=marks[i]
}

console.log('Smallest element in array is',min)