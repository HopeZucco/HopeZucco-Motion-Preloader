import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//Gsap Register Plugins

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, MotionPathHelper);


const mainTL = gsap.timeline();

 
mainTL.set(".steam",{drawSVG:"0%"});

 function setStage(){
    let tl = gsap.timeline();

    
//reset the thing 
tl

.to(".swirl", {drawSVG:"0%", fillOpacity: 0, duration: 0})
.to(".handle", {drawSVG:"0%", fillOpacity: 0, duration: 0})
.to(".side", {drawSVG:"0%", fillOpacity: 0, duration: 0})
// .to(".steam", {drawSVG:"0%", fillOpacity: 0, duration: 0})



//animate the lines and the fill 
.to(".swirl", {drawSVG:"100%", fillOpacity: 1, duration: 2}, 'animateConcurrently')
.to(".side", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1}, 'animateConcurrently')
.to(".handle", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1.5}, 'animateConcurrently')
// .to(".steam", {drawSVG:"100%", fillOpacity: 1, duration: 2, delay: 1.9}, 'animateConcurrently')
 

    return tl;

    }

function firstAnimation(){
        let tl = new gsap.timeline();

        tl
        .to(".steam", {drawSVG:"0%", fillOpacity: 0, duration: 0})
        .to(".steam", {drawSVG:"100%", fillOpacity: 1, duration: 2}, 'animateConcurrently')
        .to(".steam", {alpha: 0, duration: .5})
        // .to(".steam", {drawSVG:"0%", fillOpacity: 0, duration: 0})
        // .to(".steam", {drawSVG:"100%", fillOpacity: 1, duration: 0})
        tl.repeat(-1)

    
        ;
       


        return tl;

        // //gets current repeat value
        //var repeat = tl.repeat(); 

        // //sets repeat to 2
        // tl.repeat(0);

    
        }




 mainTL.add(setStage())
 .add(firstAnimation(),"-=1.5")

 ;





GSDevTools.create()