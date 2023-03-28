document.addEventListener("DOMContentLoaded", () => {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) =>
      new bootstrap.Popover(popoverTriggerEl, ".popover-dismiss", {
        trigger: "focus",
      })
  );
  const headline = document.getElementById("headline");
  const headlineText = "Hey, I'm Faheem.<br>Keep scrolling.";
  typeWriter(headline, headlineText);
  niftyEffect();
});

const niftyEffect = () => {
  gsap.registerPlugin("ScrollTrigger");
  gsap.defaults({ ease: "none", duration: 2 });

  const tl = gsap.timeline();
  tl.from(".skillset-panel", { xPercent: -120 })
    .from(".education-panel", { xPercent: 120 })
    .from(".connect-panel", { yPercent: 120 });

  ScrollTrigger.create({
    animation: tl,
    trigger: "#panel-container",
    start: "top top",
    end: "+=4000",
    scrub: 1,
    pin: true,
    acticipatePin: 1,
  });
};

const typeWriter = (element, text) => {
  const tl = gsap.timeline();
  tl.to(element, {
    duration: 3,
    text: {
      value: text,
      delimiter: "",
    },
    stagger: 0.04,
  });
  tl.play();
};

const replaceText = (oldText, newText) => {
  gsap.to(oldText, {
    duration: 5,
    text: {
      value: newText,
      delimiter: " ",
    },
    ease: "none",
  });
};
