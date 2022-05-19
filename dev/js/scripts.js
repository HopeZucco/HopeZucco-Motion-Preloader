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

    
//reset the thing 
tl

.to(".swirl", {drawSVG:"0%", strokeWidth: 2, fillOpacity: 0, duration: 0})
.to(".handle", {drawSVG:"0%", strokeWidth: 2, fillOpacity: 0, duration: 0})
.to(".side", {drawSVG:"0%", strokeWidth: 2, fillOpacity: 0, duration: 0})
.to(".swirl", {fillOpacity: 0, strokeWidth: 2, duration: 0})
//animate the lines and the fill 
.to(".swirl", {drawSVG:"100%", fillOpacity: 1, duration: 2}, 'animateConcurrently')
.to(".side", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1}, 'animateConcurrently')
.to(".handle", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1.5}, 'animateConcurrently')
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