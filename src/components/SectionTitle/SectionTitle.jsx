import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function SectionTitle() {
  useGSAP(() => {
    gsap.to(".text ul", {
      x: "100%", // se déplace vers la droite de l'écran
      duration: 15, // ajustez la durée selon vos besoins
      ease: "none", // animation linéaire
      repeat: -1, // répétez l'animation
      delay: 0,
    });
  });

  return (
    <div className="section-title">
      <div className="text">
        <ul>
          <li>title 1</li>
          <li>title 2</li>
          <li>title 3</li>
          <li>title 4</li>
          <li>title 5</li>
          <li>title 6</li>
        </ul>
      </div>
    </div>
  );
}

export default SectionTitle;
