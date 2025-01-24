
// locomotive
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
  
    
    
    
   
    // --- PURPLE/GREEN PANEL ---
    var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".purple",
          scroller: "#main",
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=100%"
        }
      });
    
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

// loading
function loadingAnimation(){
    var t1 = gsap.timeline()
    t1.from("#page1",{
        opacity:0,
        duration:0.2,
        delay:0.2
    })

    t1.from("#page1",{
        transform: "scaleX(8) scaleY(0.2) translateY(80%)",
        borderRadius:"150px",
        duration:1,
        ease:"expo.out"
    })

    t1.from(".menu-bar",{
        opacity:0,
        delay:-0.1
    })
    t1.from("#page1 p, #page div",{
        opacity:0,
        duration:0.1,
        stagger:0.2
    })
}

// page-2-Animation

function page2Animation() {
    var elements = document.querySelectorAll(".right-elem");

    elements.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {



            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener("mousemove", function (dets) {
            console.log(elem.getBoundingClientRect());

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150

            })
        })
    })

}


// footer connect




// page3
function page3Animation() {
    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

    var sections = document.querySelectorAll(".section-right")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()

        })

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load()
        })
    })
}

//product drop-down
function page6() {

    //ui-ux section
    var drop = document.querySelector(".ui-ux");

    drop.addEventListener("click", function (elem) {
        var arrowIcon = document.querySelector("#arrow-icon");

        if (arrowIcon.classList.contains('ri-arrow-up-s-line')) {
            // Change to down arrow
            arrowIcon.classList.remove('ri-arrow-up-s-line');
            arrowIcon.classList.add('ri-arrow-down-s-line');
        } else {
            // Change to up arrow
            arrowIcon.classList.remove('ri-arrow-down-s-line');
            arrowIcon.classList.add('ri-arrow-up-s-line');
        }

    })


    //product section

    var product = document.querySelector(".product");
    product.addEventListener("click", function () {
        var arrowIcone = document.querySelector("#arrow-icons");
        if (arrowIcone.classList.contains("ri-arrow-down-s-line")) {
            arrowIcone.classList.remove("ri-arrow-down-s-line")
            arrowIcone.classList.add("ri-arrow-up-s-line")
        }
        else {
            arrowIcone.classList.remove("ri-arrow-up-s-line")
            arrowIcone.classList.add("ri-arrow-down-s-line")
        }
    })
}

// page7
function page7() {
    // part-2++++++++++++++++++++++++++++++++++
    gsap.from("#btm7-part2 h4 ", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part2",
            scroller: "#main",
            // markers:true
            start: "top 80%",
            end: "top 10%"
            , scrub: true
        }
    }

    )
    // part3+++++++++++++++++++++++++++++++
    gsap.from("#btm7-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part3",
            scroller: "#main",
            // markers:true
            start: "top 80%",
            end: "top 10%"
            , scrub: true
        }
    }

    )
    // part-4+++++++++++++++++++++++++++++++
    gsap.from("#btm7-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part4",
            scroller: "#main",
            // markers:true
            start: "top 80%",
            end: "top 10%"
            , scrub: true
        }
    }

    )
}
loadingAnimation()
locomotiveAnimation();
page2Animation();
page3Animation();
page6();
page7();