import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionSecond() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.add(
      gsap.from(".container-left", {
        x: -100,
        duration: 2,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.5,
      }),
      0
    ).add(
      gsap.from(".container-right", {
        x: 100,
        duration: 2,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.5,
      }),
      0
    );

    ScrollTrigger.create({
      trigger: ".section-second",
      start: "top bottom",
      end: "bottom center",
      markers: true,
      scrub: true,
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  }, []);

  return (
    <div className="section-second">
      <div className="container-left">left</div>
      <div className="container-right">right</div>
    </div>
  );
}

export default SectionSecond;
