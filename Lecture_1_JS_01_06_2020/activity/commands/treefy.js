//node tpp.js treefy "C:\Users\white house\Desktop\pepweb\Lecture_0_1_intro1\Lecture_1_JS_01_06_2020\raw\xyz" "C:\Users\white house\Desktop\pepweb\Lecture_0_1_intro1\Lecture_1_JS_01_06_2020\raw\dest"
//above command is used in tpp.js
let fs=require('fs');
let path=require('path');
module.exports.treefy = function () {
    console.log("treefy Has been implemented");
    let src=arguments[0];
    let dest=arguments[1];
    let buffer=fs.readFileSync(path.join(src,"metadata.json"));
    let cElem=JSON.parse(buffer);
    


    treefYFn(src,dest,cElem);
}

function treefYFn(src,dest,cElem)
{
    if(cElem.isFile==true)
    {
        let srcPath=path.join(src,cElem.newName);
        let destpath=path.join(dest,cElem.oldName);
        fs.copyFileSync(srcPath,destpath);
        console.log(`Directory ${cElem.oldName} copied to dest`);
    }
    else{
        let dirName=cElem.name;
        let dirPath=path.join(dest,dirName);
        fs.mkdirSync(dirPath);
        console.log(`directroy ${cElem.name} created inside ${dest}`);
        //recursion
        for(let i=0;i<cElem.children.length;i++)
        {
            treefYFn(src,dirPath,cElem.children[i]);
        }
    }
}