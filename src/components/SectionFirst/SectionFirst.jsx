import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SectionFirst() {
  useGSAP((context) => {
    gsap.from(
      ".container-first h1 span",
      1,
      {
        top: 50,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.5,
      },
      0.3
    );
    gsap.from(
      ".btn-first",
      1,
      { top: -50, opacity: 0, ease: "power2.out", stagger: 0.5 },
      "-=1"
    );
    gsap.from(
      ".canette",
      1,
      { right: -50, opacity: 0, ease: "power2.out", stagger: 0.5 },
      0.3
    ),
    gsap.from(
        ".lignes .l1",
        1,
        { width: 0, ease: "power2.out", stagger: 0.5 },
        "-=1"
    ),
    gsap.from(
        ".lignes .l2",
        1,
        { width: 0, ease: "power2.out", stagger: 0.5 },
        "-=1"
    ),
    gsap.to(".canette", {
        rotate: 15,
        duration: 2.5,
        ease: ".power2.out",
    }),
    gsap.fromTo(
        ".canette",
        { y: 0 },
        { y: 15, duration: 2, yoyo: true, repeat: -1, ease: "power2.inOut" },
        "0"
    );

    console.log(context);
  }, []);

  return (
    <div className="section-first">
      <div className="lignes">
        <div className="l1"></div>
        <div className="l2"></div>
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

      <img src="/images/can.png" alt="" className="canette" />
    </div>
  );
}

export default SectionFirst;
