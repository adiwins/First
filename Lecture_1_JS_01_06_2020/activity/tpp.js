//node tpp.js view "C:\Users\white house\Desktop\pepweb\Lecture_0_1_intro1\Lecture_1_JS_01_06_2020\raw\d10" -f
//above was the command which i given to terminal

let input = process.argv.slice(2);
let viewFile=require('./commands/view');
let helpFile=require('./commands/help');
let untreefyFile=require('./commands/untreefy')
let treefyFile=require('./commands/treefy');

//console.log(input);
//process.argv             node tpp.js view src -t
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFile.view(process.argv[3],process.argv[4]);
        break;
    case "treefy":
        treefyFile.treefy(process.argv[3],process.argv[4]);
        break;
    case "untreefy":
        untreefyFile.untreefyFn(process.argv[3],process.argv[4]);
        break;
    case "help":
        helpFile.help();
        break;
    default:
        console.log("Work Command");
        break;
}