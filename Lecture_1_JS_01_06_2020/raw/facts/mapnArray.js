Array.prototype.myMap=function mymap(t)
{
    let ar=[];
    
    for(let i=0;i<this.length;i++)
    {
        ar.push(t(this[i]));
    }
    return ar;
}

function transformer(x)
{
    if(x%2==0)
    return x+1;
    else
    return x-1;
}

let a=[1,2,3,4];
console.log(a.myMap(transformer));

