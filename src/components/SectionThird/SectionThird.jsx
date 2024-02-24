import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionThird() {
  const data = [
    {
      title: "Kiwi Flavour",
      description: "Description 1...",
      image: "/images/kiwi.png",
    },
    {
      title: "Agrumes Flavour",
      description: "Description 2...",
      image: "/images/agrumes.png",
    },
    {
      title: "Peach Flavour",
      description: "Description 3...",
      image: "/images/nectarines.png",
    },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    // Show first item on load
    for (let i = 0; i < data.length; i++) {
      tl.add(
        gsap.from(`.container-third:nth-child(${i + 1})`, {
          duration: 1,
          y: 100,
          opacity: 0,
          ease: "power2.out",
          stagger: 0.5,
          delay: i * 0.4,
        }),
        0
      ).add(
        gsap.fromTo(
          `.container-third:nth-child(${i + 1}) img`,
          {
            scale: 0,
          },
          {
            scale: 1,
            rotate: 360,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0,
          }
        )
      );
    }

    // Hide all items when scrolling  past the section and show them again when coming back
    ScrollTrigger.create({
      trigger: ".section-third",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
      markers: true,
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  });

  return (
    <div className="section-third">
      {data.map((item, index) => (
        <div className="container-third" key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

export default SectionThird;
