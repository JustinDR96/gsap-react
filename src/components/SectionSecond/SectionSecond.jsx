import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionSecond() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.add(
      gsap.from("#logo", {
        x: -100,
        duration: 2,
        opacity: 0,

        ease: "power2.out",
        id: "logo",
      }),
      0
    ).add(
      gsap.from(".container-right h1, .container-right p", {
        x: 100,
        duration: 2,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.2,
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro
          consequuntur voluptatibus natus, doloribus ducimus perspiciatis optio
          quae eveniet libero quidem quibusdam, ullam illum, perferendis
          corporis cum necessitatibus pariatur asperiores. Sapiente aut nisi
          assumenda cupiditate. Assumenda eaque eos cupiditate quae quis
          voluptatum aliquam eius mollitia quos repellendus optio qui
          repudiandae dolor suscipit rem dicta, eveniet nam rerum a dolorum
          consequuntur
        </p>
      </div>
    </div>
  );
}

export default SectionSecond;
