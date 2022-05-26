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

// .to(".swirl", {drawSVG:"100%", strokeWidth: 1, fillOpacity: 0, duration: 0})
// .to(".handle", {drawSVG:"0%", strokeWidth: 9, fillOpacity: 0, duration: 0})
// .to(".side", {drawSVG:"0%", strokeWidth: 5, fillOpacity: 0, duration: 0})
// .to(".steam", {drawSVG:"100%", strokeWidth: 1, fillOpacity: 0, duration: 0})
// .to(".swirl", {fillOpacity: 0, strokeWidth: 1, duration: 0})
.to(".swirl", {drawSVG:"0%", fillOpacity: 0, duration: 0})
.to(".handle", {drawSVG:"0%", fillOpacity: 0, duration: 0})
.to(".side", {drawSVG:"0%", fillOpacity: 0, duration: 0})
.to(".steam", {drawSVG:"0%", fillOpacity: 0, duration: 0})


//fillpath
// .to(".swirlpath", {drawSVG:"0%", strokeWidth: 5, fillOpacity: 0, duration: 0})
// .to(".handlepath", {drawSVG:"0%", strokeWidth: 5, fillOpacity: 0, duration: 0})
// .to(".sidepath", {drawSVG:"0%", strokeWidth: 3, fillOpacity: 0, duration: 0})
// .to(".swirlpath", {fillOpacity: 0, strokeWidth: 5, duration: 0})

//animate the lines and the fill 
.to(".swirl", {drawSVG:"100%", fillOpacity: 1, duration: 2}, 'animateConcurrently')
.to(".side", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1}, 'animateConcurrently')
.to(".handle", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1.5}, 'animateConcurrently')
.to(".steam", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1.9}, 'animateConcurrently')
    // tl
    // .set(".swirl", {x:"-=175", alpha:0})
    // .set(".side", {x:"-=175", alpha:0})
    // .set(".handle", {x:"-=175", alpha:0})

    //  ;ko 

// .from(".swirl", {fillOpacity: 0, strokeWidth: 2, duration: 0})

    return tl;

    }

function firstAnimation(){
        let tl = gsap.timeline();
    
        tl
        //.from (".swirl", {duration:.75, xPercent:-50, rotation:360, alpha:0})
        // .to(".swirl", {duration:3, x:0, alpha:1})

        //.to(".swirl", {duration: 3, drawSVG:"0% 100%"})
        // .to(".steam", {drawSVG:"100%", fillOpacity: 0, duration: 2)
        //
        // .to(".steam", {drawSVG:"100%", fillOpacity: 1, duration: 2})
        .to(".steam", {alpha: 0, duration:1})
        .to(".steam", {drawSVG:"0%", fillOpacity: 0, duration: 0})
        .to(".steam", {drawSVG:"100%", fillOpacity: 1, duration: 0})
        tl.repeat(4)

    
        ;
       


        return tl;

        // //gets current repeat value
        // var repeat = tl.repeat(); 

        // //sets repeat to 2
        // tl.repeat(0);

    
        }




 mainTL.add(setStage())
 .add(firstAnimation())

 ;





GSDevTools.create()