// request module-> npm->install
let req = require("request");

// cheerio ->pass html -> read -> parse->tool
let ch = require("cheerio");
let match = require("./match.js");
// let path = require("path");
// let xlsx = require("xlsx");
const fs = require("fs");
const { nextElementSibling } = require("domutils");

//------------------
//request ->to make request to server -> and get html file
//------------------
// to extract data from html file
//-----------------



//program bottleneck
// in node js we have async function
function getScoreCard(url){
    req(url,cb);
}


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


function parseHTML(data){
    let fTool = ch.load(data);
   let AllScorecardElem = fTool('a[data-hover="Scorecard"]');
   for(let i=0; i<AllScorecardElem.length; i++){
       let url = ch(AllScorecardElem[i]).attr("href");
     let fullurl = ("https://www.espncricinfo.com"+url);
     match.processMatch(fullurl);



    }
}



// req('https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard', cb);
// in above cb is a function which only runs when response mil jata hai


console.log("After");
console.log("Request Send");


module.exports = {
    getScoreCard: getScoreCard
}