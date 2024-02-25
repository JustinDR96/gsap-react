import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionSecond() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.add(
      gsap.from("#logo", {
        duration: 2,
        opacity: 0,
        scale: 0.5,
        ease: "power2.out",
        id: "logo",
      }),
      0
    )
      .add(
        gsap.from(".container-right h1", {
          x: 100,
          duration: 2,
          opacity: 0,
          ease: "power2.out",
        }),
        0
      )
      .add(
        gsap.from(".container-right ul li", {
          x: 100,
          duration: 1,
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
      scrub: true,
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  }, []);

  return (
    <div className="section-second">
      <div className="container-left">
        <img src="/images/can.png" alt="" className="logo" id="logo" />
      </div>
      <div className="container-right">
        <h1>Our Story</h1>
        <ul>
          <li>Natural fruit juices</li>
          <li>Coconut water</li>
          <li>Guarana extract</li>
          <li>Taurine</li>
          <li>Ginseng extract</li>
          <li>Green tea extract</li>
          <li>Stevia (natural sweetener)</li>
          <li>Vitamins (vitamin C, vitamin B)</li>
          <li>Minerals (potassium, magnesium)</li>
          <li>Citric acid (for acidity)</li>
        </ul>
      </div>
    </div>
  );
}

export default SectionSecond;
