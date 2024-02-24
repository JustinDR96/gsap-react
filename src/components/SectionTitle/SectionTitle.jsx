import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SectionTitle() {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    const clones = [...marquee.children, ...marquee.children];

    gsap.set(marquee, {
      css: {
        width: `${clones.length * 30}%`,
      },
    });

    gsap.set(clones, {
      css: {
        width: `${100 / clones.length}%`,
      },
    });

    gsap.to(clones, {
      x: "-200%",
      ease: "none",
      repeat: -1,
      duration: 10,
    });
  });

  return (
    <div className="section-title">
      <div className="text" ref={marqueeRef}>
        <span>title 1</span>
        <span>title 2</span>
        <span>title 3</span>
        <span>title 4</span>
        <span>title 5</span>
        <span>title 6</span>
      </div>
    </div>
  );
}

export default SectionTitle;
