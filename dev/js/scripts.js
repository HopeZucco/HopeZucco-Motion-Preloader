import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//Gsap Register Plugins

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin (MorphSVGPlugin);
gsap.registerPlugin (DrawSVGPlugin);
gsap.registerPlugin (MotionPathHelper);

const mainTL = gsap.timeline();

 mainTL
 //.fromTo(".swirl", {duration: 3, drawSVG:0})
 
 function setStage(){
    let tl = gsap.timeline();

    tl.set(".swirl", {x:"-=175", alpha:0})
    tl.set(".side", {x:"-=175", alpha:0})
    tl.set(".handle", {x:"-=175", alpha:0})

    ;

    
    return tl;

    
    }

 mainTL.add()


 ;





GSDevTools.create()