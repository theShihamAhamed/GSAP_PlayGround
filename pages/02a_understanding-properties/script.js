import gsap from "gsap";

gsap.to(".box", {
  duration: 1.5,
  rotation: 360,
  background: "#ff6f61",
  borderRadius: "50%",
  scale: 1.25,
  delay: 0.5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
});
