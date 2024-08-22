import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const usePageAnimations = () => {
  // Create refs for each section
  const textRef = useRef();
  const formRef = useRef();
  const animationRef = useRef();
  const navRef = useRef();
  const oldNavbarRef = useRef();
  const filterBarRef = useRef();

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current.children, {
        y: -20,
        duration: 0.5,
        delay: 0.2,
        opacity: 0,
        stagger: 0.1,
      });
    }

    if (textRef.current && formRef.current && animationRef.current) {
      const tl = gsap.timeline();
      tl.from(textRef.current, {
        y: -20,
        duration: 0.5,
        delay: 0.1,
        opacity: 0,
      });

      tl.from(formRef.current, {
        y: 20,
        duration: 0.7,
        opacity: 0,
      });

      tl.from(animationRef.current, {
        x: 20,
        duration: 0.5,
        opacity: 0,
      });
    }

    if (filterBarRef.current) {
      gsap.to(filterBarRef.current, {
        scrollTrigger: {
          trigger: filterBarRef.current,
          scroller: "body",
          scrub: 3,
          pin: true,
          start: "top 40%",
          end: "top 30%",
          // markers: true, // Optional: for debugging
          onEnter: () => {
            // console.log("entered!!");
            gsap.to(filterBarRef.current, {
              duration: 1,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            });
          },
          onLeaveBack: () => {
            gsap.to(filterBarRef.current, {
              backgroundColor: "#ffffff",
              duration: 1,
              boxShadow: "none",
            });
          },
          onLeave: () => {
            gsap.to(filterBarRef.current, {
              backgroundColor: "#ffffff",
              duration: 1,
            });
          },
          onEnterBack: () => {
            gsap.to(filterBarRef.current, {
              duration: 1,
              boxShadow: "none",
            });
          },
        },
      });
    }
  }, []);

  return {
    navRef,
    textRef,
    formRef,
    animationRef,
    filterBarRef,
    oldNavbarRef,
  };
};

export default usePageAnimations;
