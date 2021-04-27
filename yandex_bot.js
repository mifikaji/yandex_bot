// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @icon         
// @grant        none
// ==/UserScript==
let keywords=["гобой","как звучит саксофон","как звучит флейта"];

let button_search=document.getElementsByClassName("button_theme_search")[0];
let links=document.links;
let keyword=keywords[getRandom(0,keywords.length)];
let yandexInput=document.getElementsByName('text')[0];
let i=0;

if(button_search!==undefined){
    let timerId=setInterval(function(){
        yandexInput.value+=keyword[i];
        i++;
        if(i==keyword.length){
            clearInterval(timerId);
            button_search.click();
        }
    },1000);
}else if(location.hostname=="xn----7sbab5aqcbiddtdj1e1g.xn--p1ai"){
    console.log("Мы на музыкалке");
    setTimeout(()=>{
        let index=getRandom(0,links.length);
        if(getRandom(0,101)>=60){
            location.href="https://yandex.ru/";
        }
        if(links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai")!=-1){
            links[index].click()
        }
    },getRandom(3500,7000));
}
else{
    let nextYandexPage=true;
    for(let i=0; i<links.length;i++){
        if(links[i].href.indexOf(`xn----7sbab5aqcbiddtdj1e1g.xn--p1ai`)!==-1){
            let link=links[i];
            nextYandexPage=false;
            link.removeAttribute("target");
            console.log("Нашёл ссылку "+link);
            setTimeout(()=>{
                link.click();
            },getRandom(1000,5000));
            break;
        }
    }
    if(document.querySelector("").innerText=="5"){
        nextYandexPage=false;
        location.href="https://yandex.ru/";
    }

    if(document.querySelector(".pager__item_current_yes").innerText!=="5"){
        setTimeout(()=>{
            let next=document.getElementByClassName("pager__item_kind_next");
            next.click();
        },getRandom(3000,5500));
    }
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}
