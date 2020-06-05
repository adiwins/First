let array1 = [3,6,14,16,22];
let map1 = array1.map(x=>{
if(x%2==0)
  return x+1;
 return x-1;
});
//console.log(map1);

let result = map1.filter(x=>{
 let prime=true;
  for(let i=2;i<=x/2;i++)
    if(x%i==0)
    {
      prime=false;
      break;
    }
  if(prime==true)
    return x;
  return;
});
//console.log(result);

//Lecture_1_JS_01_06_2020\raw\facts\mapnfilter.js

function transformer(x)
{
    if(x%2==0)
    return x+1;
    else
    return x-1;
}

let ary=array1.map(transformer);//each element of map is passed to transformer
//console.log(ary);


function test(elem)
{
    for(let i=2;i<elem;i++)
    if(elem%i==0)
    return false;
    return true;
}

let flt=ary.filter(test);//if test returns true then filter adds that particular element ary element into flt


//============================================================================================


let array2 = [3,6,14,16,22];
function myMap(arr,transformer)
{
    let ar=[];
    
    for(let i=0;i<arr.length;i++)
    {
        ar.push(transformer(arr[i]));
    }
    return ar;
}
let a=myMap(array1,transformer);
console.log(a);

function myFilter(arr,test)
{
    let ar=[];
    
    for(let i=0;i<arr.length;i++)
    {
        if(test(arr[i]))
        ar.push(arr[i]);
    }
    return ar;
}
let ans=myFilter(a,test);
console.log(ans);

function f(e)
{
  if(e=='a')
  return true;
  return false;
}
var c={a:1,b:1};
var anss=c.filter(f);
console.log(anss);