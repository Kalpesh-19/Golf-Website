var crsr = document.querySelector("#cursor");
var crsrbr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsrbr.style.left = dets.x - 150 +"px"
    crsrbr.style.top = dets.y - 150 +"px"
})

gsap.to("#nav", {
    backgroundColor : "black",
    height: "110px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
    
})

gsap.to("#main", {
    backgroundColor : "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

