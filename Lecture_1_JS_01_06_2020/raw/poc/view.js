
let fs=require('fs');
//sorce provided print content
let path=require('path');
function checkWhetherFile(src)
{
    //check whether file or directory
    
    return fs.lstatSync(src).isFile();
}

function getContent(src)
{
return fs.readdirSync(src);
}

function view(src,toprint)
{
    if(checkWhetherFile(src)==true)
    console.log(toprint+' *');
    else
    {
        console.log(toprint);
        let childNames=getContent(src);
        // console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            let childPath=path.join(src,childNames[i]);
            let cToPrint=path.join(toprint,childNames[i]);
            view(childPath,cToPrint);

        }
    }
}
let src=process.argv[2];
//console.log(src);
//view(src,path.basename(src));


//viewAsFlatFiles is not yet changed
function viewAsFlatFiles(src)
{
    if(checkWhetherFile(src)==true)
    console.log(path.basename(src)+' *');
    else
    {
        console.log(path.basename(src));
        let childNames=getContent(src);
        // console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            let childPath=path.join(src,childNames[i]);
            viewAsFlatFiles(childPath);
        }
    }
}

viewAsFlatFiles(src);

function viewAsTree(src,indent)
{
    if(checkWhetherFile(src)==true)
    console.log(indent + path.basename(src) + '*');
    else
    {
        console.log(indent+path.basename(src));
        let childNames=getContent(src);
        // console.log(childNames);
        for(let i=0;i<childNames.length;i++)
        {
            let childPath=path.join(src,childNames[i]);
            //let cToPrint=path.join(toprint,childNames[i]);
            viewAsTree(childPath,indent+"\t");

        }
    }
}

//viewAsTree(src,'');