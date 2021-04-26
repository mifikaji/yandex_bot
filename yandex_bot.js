// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         
// @grant        none
// ==/UserScript==
let button_theme_search=document.getElementsByClassName("button_theme_search")[0];
let links=document.links;
let keywords=["гобой","как звучит саксофон","как звучит флейта"];
let keyword=keywords[getRandom(0,keywords.length)];

if(button_theme_search!==undefined){
document.getElementsByName('text')[0].value=keyword;
document.getElementsByClassName("button_theme_search")[0].click();
}else{
    for(let i=0; i<links.length;i++){
        if(links[i].href.indexOf(`xn----7sbab5aqcbiddtdj1e1g.xn--p1ai`)!==-1){
            let link=links[i];
            link.removeAttribute("target");
            console.log("Нашёл ссылку "+link);
            link.click();
            break;
        }
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
