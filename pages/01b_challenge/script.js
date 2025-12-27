gsap.to(".card", {
  scale: 1,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  boxShadow: `
      0 25px 60px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(84, 160, 255, 0.9)
    `,
});
