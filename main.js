
  
  
  
  gsap.registerPlugin(ScrollToPlugin);
  gsap.registerPlugin(ScrollTrigger);
  function colorCircleAnimation() {
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff9900", "#ff00ff", "#FD5A00", "#2EBBE3", "#ECA0BE", "#008539"]; // Different colors
    const parent = document.querySelector(".main");
    let colorIndex = 0;
    let oldDets = { x: 0, y: 0, time: 0 }; // Track cursor position and time
    const thresholdX = 5; // Horizontal movement threshold
    const thresholdY = 5;  // Vertical movement threshold
  
    parent.addEventListener("mousemove", (dets) => {
      let currentTime = Date.now();
      let timeDiff = currentTime - oldDets.time;
      let diffX = dets.x - oldDets.x;
      let diffY = dets.y - oldDets.y;
  
      if (Math.abs(diffX) > thresholdX || Math.abs(diffY) > thresholdY) {
  
  
  
        const circleDiv = document.createElement("div");
  
        colorIndex = (colorIndex + 1) % colors.length;
  
        circleDiv.style.position = "absolute";
        circleDiv.style.zIndex = "500";
        circleDiv.style.pointerEvents = "none";
        circleDiv.style.top = `${dets.y + scrollY}px`;
        circleDiv.style.left = `${dets.x}px`;
        circleDiv.style.width = "1.6vw";
        circleDiv.style.height = "1.6vw";
        circleDiv.style.background = colors[colorIndex];
        circleDiv.style.borderRadius = "50%";
        circleDiv.style.opacity = 0;
        circleDiv.style.filter = "blur(2px)";
        circleDiv.style.transform = "translate(-50%,-50%)";
        circleDiv.style.boxShadow = "0px 0px 15px rgba(255, 255, 255, 0.3)";
        parent.appendChild(circleDiv);
  
        gsap.to(circleDiv, {
          duration: 0.5,
          opacity: 1,
          ease: "power2.out",
        });
  
        gsap.from(circleDiv, { width: "0vw", height: "0vw", duration: 0.3 });
  
        oldDets.x = dets.x;
        oldDets.y = dets.y;
        oldDets.time = currentTime;
  
        setTimeout(() => {
          gsap.to(circleDiv, {
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => { parent.removeChild(circleDiv); }
          });
        }, 200);
      }
    });
  }
  if(window.innerWidth > 800){
    colorCircleAnimation();
  }
  
  
   function page2 (){
    let elems = document.querySelectorAll(".page2 .elem");  
    elems.forEach((elem) => {
      let img = elem.querySelector("img")
      let line = elem.querySelector(".line")
      let h = elem.getBoundingClientRect().height;
      let text = elem.querySelector(".majorText")
      let s = 0.7;
      if(window.innerWidth < 650){
        s = 0.2
      }

      
      gsap.from(line, {
        width: "2vw",
        ease: "linear",
        duration: 2,
        scrollTrigger: {
          trigger: line,
          scroller: "body",
          start: 'top 97%',
          end: 'top 25%',
          scrub: true,
        },
      })
      gsap.from(img, {
        width: "20vw",
        // scale: 0.5,
        // ease: "power3.out",
        duration: 2,
        scrollTrigger: {
          trigger: img,
          scroller: "body",
          start: 'top 110%',
          end: 'top 20%',
          scrub: true,
          // markers: true,
        }
      })
      if(window.innerWidth > 640){
        gsap.from(elem, {
          // height: `${h * 0.5}px`,
          height: "25vh",
          // scale: 0.5,
          // ease: "power3.out",
          duration: 2,
          scrollTrigger: {
            trigger: elem,
            scroller: "body",
            start: 'top 110%',
            end: 'top 20%',
            scrub: true,
            // markers: true,
          }
        })
      }
      gsap.from(text,{
        scale: s,
        duration: 2,
        scrollTrigger: {
          trigger: elem,
          scroller: "body",
          start: 'top 100%',
          end: 'top 20%',
          scrub: true,
        }
      })
    })
   }
   
  //  page2()








let p3Circles = document.querySelectorAll(".page3 .circlee") 

p3Circles.forEach((circle)=>{
   circle.addEventListener("mouseenter",()=>{
    let redC = circle.querySelector("div");
    let icon = circle.querySelector("i")

    gsap.to(redC,{
      top:0,
      duration: 0.4,
      ease: "power2.out"
    })
    gsap.to(icon,{
      scale: 0.8,
      duration: 0.5,
      ease: "power1.out"
    })

   });
   circle.addEventListener("mouseleave",()=>{
    let redC = circle.querySelector("div");
    let icon = circle.querySelector("i")

    gsap.to(redC,{
      top:"100%",
      duration: 0.4,
      ease: "power2.out"
    })
    gsap.to(icon,{
      scale: 1,
      duration: 0.5,
      ease: "power1.out"
    })

   });
})


// formate for text animation 

// <div class="majorText overflow-hidden text-[10vw] h-[10vw] leading-none">
// .majorText ke andar ese 2 parts

//  <div class="h-full spans1 flex"> 
// <div class="mr-[2vw]"> <span>g</span><span>e</span><span>t</span> </div> 
// <div class="mr-[2vw]"> <span>i</span><span>n</span> </div>
// <div class="mr-[2vw]"> <span>t</span><span>o</span><span>u</span> </div>
//</div>

function textanimation() {
  let texts = document.querySelectorAll(".majorText");

  texts.forEach((text) => {
    let child1 = text.querySelectorAll(".spans1 span");
    let child2 = text.querySelectorAll(".spans2 span");

    // Create GSAP timeline and pause it initially
    let tl = gsap.timeline({ paused: true });

    // Define the forward animation
    tl.to(child1, {
      y: "-100%",
      stagger: 0.01,
      duration: 0.5,
    }).to(
      child2,
      {
        y: "-100%",
        stagger: 0.01,
        duration: 0.5,
      },
      "<" // This ensures child2 animates simultaneously with child1
    );

    text.addEventListener("mouseenter", () => {
      tl.play(); // Play the animation forward
    });

    text.addEventListener("mouseleave", () => {
      tl.reverse(); // Reverse the animation smoothly
    });
  });
}

// Call the function
textanimation();




// let p1AboutBtn = document.querySelector(".page1 nav .aboutBtn")
let p1ContactBtn = document.querySelector(".page1 nav .contactBtn")

// let d1 = document.querySelector(".page2").getBoundingClientRect().top ;
let d2 = document.querySelector(".page3 .end").getBoundingClientRect().top ;
// p1AboutBtn.addEventListener("click",()=>{
//   gsap.to(window, {
//     duration: 1.5,
//     scrollTo: d1,
// });
// })
p1ContactBtn.addEventListener("click",()=>{
  gsap.to(window, {
    duration: 1.5,
    scrollTo: d2 + 1500,
});
})