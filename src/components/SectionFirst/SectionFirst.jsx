import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionFirst() {
  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.add(
      gsap.from(".container-first h1 span", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.5,
      })
    )
      .add(
        gsap.from(".btn-first", {
          duration: 1,
          y: -50,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.5,
        }),
        "-=1"
      )
      .add(
        gsap.fromTo(
          "#canette",
          { y: 0 },
          {
            y: 15,
            duration: 2,
            yoyo: true,
            repeat: -1,
            repeatDelay: 0,
            ease: "power2.inOut",
          }
        ),
        0
      )
      .add(
        gsap.from("#canette", {
          duration: 1,
          right: -50,
          opacity: 0,
          ease: "power2.out",
        }),
        0.3
      )
      .add(
        gsap.from(".lignes .l1", {
          duration: 1,
          width: 0,
          ease: "power2.out",
          stagger: 0.5,
        }),
        "-=1"
      )
      .add(
        gsap.from(".lignes .l2", {
          duration: 1,
          width: 0,
          ease: "power2.out",
          stagger: 0.5,
        }),
        "-=1"
      )
      .add(
        gsap.fromTo(
          "#canette",
          {
            rotate: 0,
          },
          { rotate: 15, duration: 3, ease: "power2.out" }
        ),
        0
      );

    ScrollTrigger.create({
      trigger: ".section-first",
      start: "top center",
      end: "bottom center",
      scrub: true,
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  }, []);

  return (
    <div className="section-first">
      <div className="lignes">
        <div className="l1" />
        <div className="l2" />
      </div>

      <div className="container-first">
        <h1>
          <span>Need </span>
          <span>your </span>
          <span>Power </span>
          <span>Up</span>
        </h1>
        <div className="container-btns">
          <button className="btn-first b1">Buy Now</button>
          <button className="btn-first b2">Learn More</button>
        </div>
      </div>

      <img src="/images/can.png" alt="" className="canette" id="canette" />
    </div>
  );
}

export default SectionFirst;
