// request module-> npm->install
let req = require("request");

// cheerio ->pass html -> read -> parse->tool
let ch = require("cheerio");
let path = require("path");

const fs = require("fs");
const { nextElementSibling } = require("domutils");

//------------------
//request ->to make request to server -> and get html file
//------------------
// to extract data from html file
//-----------------



//program bottleneck
// in node js we have async function
req('https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard', cb);
// in above cb is a function which only runs when response mil jata hai


console.log("After");
console.log("Request Send");
function cb(error, response, data){

    if(response.statusCode==404){
    console.log("Page not Found");
}else if(response.statusCode == 200){
    // console.log(data);
    parseHTML(data);
} else {
    console.log(err);
}   
}

function parseHTML(data) {
// HTML (CSS Selectors)

// h1{ background-color: green; } (for h1)
// .larger{ font-size: 6rem; } (for class)
// #underline{ text-decoration: underline;} (for id)

// HTML (CSS Combinators)

// (Sibling Combinator)
// for paragraph element with some class combination
// p.larger{ font-size: 2rem;} 

// descendent conbinators
// ul li{ list-style: 2rem;}
// (for 2 elements ul and li)
// example 
/* <ul>
    <li></li>
    <li></li>
    <li></li>
</ul> */


//parse
let fTool = ch.load(data);
// let venueElem = fTool(".match-info.match-info-MATCH .description");
// console.log(venueElem.text());
let elem = fTool(".card.content-block.match-scorecard-table .Collapsible");
// console.log(elem.length);

//text-> concatenate the text of all matching element text 
// html -> first element ki  html provide
let fullPageHTML = "";
for(let i=0; i< elem.length; i++){
//jab bhi index likhe elem ki(array) ->wrap in cheerio-> ch
//    let html =  ch(elem[i]).html()
//    fullPageHTML += html + "</br>";
 let InningElement = ch(elem[i]);
 let teamname = InningElement.find("h5").text();
 let stringArr = teamname.split("INNINGS");
 teamname = stringArr[0].trim();
//  The trim() method removes whitespace from both sides of a string.

 
 let playerRows = InningElement.find(".table.batsman tbody tr");
for(let j=0; j<playerRows.length; j++){
    let cols = ch(playerRows[j]).find("td");
    let isAllowed = ch(cols[0]).hasClass("batsman-cell");
    if(isAllowed){
        console.log(ch(playerRows[j]).text());
       let playerName = ch(cols[0]).text().trim();
       let runs = ch(cols[2]).text().trim();
       let balls = ch(cols[3]).text().trim();
       let fours = ch(cols[5]).text().trim();
       let sixes = ch(cols[6]).text().trim();
       let sr  = ch(cols[7]).text().trim();
    //    console.log(`${playerName} played for ${teamname} and scores ${runs} in ${balls} balls with SR: ${sr}`);
     
    //data -> required folder, required file data add
    processPlayer(playerName, runs, balls, sixes,fours, sr, teamname);
    // data ->
    
    let playerObject = {
        playerName: playerName,
        runs: runs,
        balls: balls,sixes,
        fours: fours,
        sr: sr,teamname

    }

    // check -> task
    // check -> folder exit or not?
    // if folder exist then check filename if filename doesn't exist then create file and append data
    // if folder does not exist create folder and create file then append data

    let dirExist = checkExistence(teamname);
    if(dirExist){
      
    }else{
       createFolder(teamname);
    }

    // file check
    let playerFileName = path.join(__dirname, teamname, playerName+".json");
    let fileExist = checkFile(playerFileName);
    let playerEntries = [];
    if(fileExist){
      let binarydata = fs.readFileSync(playerFileName);
      playerEntries = JSON.parse(binarydata);
      
      playerEntries.push(playerObject);
      fs.writeFileSync(playerFileName, JSON.stringify(playerEntries));

      //append
        }else{
            playerEntries.push(playerObject);
            fs.writeFileSync(playerFileName, JSON.stringify(playerEntries));
            //""""""""""""
            //use of stringify
            // [{"name": "Jasbir"}] +""
            // ans -> "[object object]"
            
            //:::::: to remove above ans

            //JSON.stringify([{"name": "Jasbir"}]);
            // ans-> "[{"name": "jasbir"}]"




            // file create data add
        }
    

    //dirname matlab current folder jaha kaam chal rha hai


}
function checkExistence(teamname){
return fs.existsSync(teamname);
}
function createFolder(teamname){
 fs.mkdirSync(teamname);
}

function checkFile(playerFileName){

}



    // if(colLength >1){
    // // console.log("valid row");
    // console.log(ch(playerRows[j]).text());

// }
}

console.log("--------------------------");
// text and html in cheerio gives a string output



//  console.log(playerRows.length);

//  console.log("Team ", i+1, teamname);


//----------------------
//teamname
//data
//opponent name
//venue
//-----------------------

}
function processPlayer(playerName, runs, balls, sixes, fours, sr, teamname){


}
fs.writeFileSync("table.html", fullPageHTML);
//here elem is a array which contains all the elements of aboove


// fs.writeFileSync("file.html", data);
// console.log("file Saved");



}



// we are going to extract the data from html file
// here node js provide a module for extracting the data from html is "cheerio"




