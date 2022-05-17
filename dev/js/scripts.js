import { gsap } from "gsap";
import { GSDevTools } from "gsap/MorphSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

//Gsap Register Plugins

gsap.registerPlugin(GSDevTools);
gsap.registerPlugin (MorphSVGPlugin);
gsap.registerPlugin (DrawSVGPlugin);
gsap.registerPlugin (MotionPathHelper);

const mainTL = gsap.timeline();

maintTL.from("#swirl", {duration: 3, drawSVG:0})



;





GSDevTools.create();