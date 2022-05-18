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
    .set(".swirl", {x:"-=175", alpha:0})
    .set(".side", {x:"-=175", alpha:0})
    .set(".handle", {x:"-=175", alpha:0})


     ;

    return tl;

    }

function firstAnimation(){
        let tl = gsap.timeline();
    
        tl
        //.from (".swirl", {duration:.75, xPercent:-50, rotation:360, alpha:0})
        .to(".swirl", {duration:3, x:0, alpha:1})

        //.to(".swirl", {duration: 3, drawSVG:"0% 100%"})

        
        ;
    
        return tl;
    
        }




 mainTL.add(setStage())
 .add(firstAnimation())

 ;





GSDevTools.create()