//if browser dosent have some functionality then we use polyfill
Array.prototype.sum=function()//adding function to array
{
    let s=0;
    for(let i=0;i<this.length;i++)
    {
        s+=this[i];
    }
    console.log(s);
}

a=[1,2,3];
a.sum();