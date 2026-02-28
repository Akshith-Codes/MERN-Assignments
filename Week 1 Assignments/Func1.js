//Largest of 3

function largest(a,b,c)
{
    if(a>b && a>c)
    {
        return a
    }
    else if(b>a && b>c)
    {
        return b
    }
    else if(c>a && c>b)
    {
        return c
    }    
}

let res=largest(8,5,9)
    console.log('The Largest of 3 numbers is',res)