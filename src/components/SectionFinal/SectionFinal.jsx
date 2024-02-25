import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionFinal() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.add(
      gsap.from(".final-left h1", {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.5,
        delay: 0.5,
      }),
      0
    ).add(
      gsap.from(".final-right img", {
        duration: 0.5,
        y: 100,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.5,
      }),
      0
    );

    ScrollTrigger.create({
      trigger: ".section-final",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  });
  return (
    <div className="section-final">
      <div className="final-left">
        <h1>100% natural</h1>
        <h1>100% fresh fruit juices</h1>
        <h1>100% Energy</h1>
      </div>
      <div className="final-right">
        <img src="images/icons/banana.png" alt="" />
        <img src="images/icons/kiwi.png" alt="" />
        <img src="images/icons/orange.png" alt="" />
        <img src="images/icons/melon.png" alt="" />
        <img src="images/icons/watermelon.png" alt="" />
        <img src="images/icons/strawberry.png" alt="" />
        <img src="images/icons/pineapple.png" alt="" />
        <img src="images/icons/lemon.png" alt="" />
      </div>
    </div>
  );
}

export default SectionFinal;
