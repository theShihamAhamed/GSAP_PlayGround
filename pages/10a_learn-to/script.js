import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    opacity: 1,
    bottom: 20,
    scale: 1,
    duration: 0.8,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        bottom: -100,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power1.in",
      });
    },
  });
};

showToastLoop();
