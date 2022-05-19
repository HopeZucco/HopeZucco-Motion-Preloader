import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//Gsap Register Plugins

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathHelper);


const mainTL = gsap.timeline();

 
 function setStage(){
    let tl = gsap.timeline();
    
tl
.fromTo(".swirl", {drawSVG:"0%"}, {fillOpacity:0, duration: 1, drawSVG:"100%"}, "+=0.1")
.fromTo(".side", {drawSVG:"0%", duration: 0}, {fillOpacity:0, duration: 2, drawSVG:"100%"}, "+=0.1")
.fromTo(".handle", {drawSVG:"0%", duration: 0}, {fillOpacity:0, duration: 2, drawSVG:"100%"}, "+=0.1")
.Fromto(".swirl", 3, {fillOpacity: 1, strokeOpacity: 0})
.Fromto(".side", 3, {fillOpacity: 1, strokeOpacity: 0})
.to(".handle", 3, {fillOpacity: 1, strokeOpacity: 0})

    // tl
    // .set(".swirl", {x:"-=175", alpha:0})
    // .set(".side", {x:"-=175", alpha:0})
    // .set(".handle", {x:"-=175", alpha:0})


    //  ;ko 

    return tl;

    }

function firstAnimation(){
        let tl = gsap.timeline();
    
        tl
        //.from (".swirl", {duration:.75, xPercent:-50, rotation:360, alpha:0})
        // .to(".swirl", {duration:3, x:0, alpha:1})

        //.to(".swirl", {duration: 3, drawSVG:"0% 100%"})

        
        ;
    
        return tl;
    
        }




 mainTL.add(setStage())
 .add(firstAnimation())

 ;





GSDevTools.create()