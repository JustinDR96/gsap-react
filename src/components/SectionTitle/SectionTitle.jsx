import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SectionTitle() {
  useGSAP(() => {
    const boxes = gsap.utils.toArray(".box");

    const loop = horizontalLoop(boxes, {
      paused: true,
      repeat: -1,
    });

    loop.play();

    ScrollTrigger.create({
      start: 0,
      end: "max",
      pin: ".container",
    });
  });

  const titles = [
    { id: 1, title: "Brand 1" },
    { id: 2, title: "Brand 2" },
    { id: 3, title: "Brand 3" },
    { id: 4, title: "Brand 4" },
    { id: 5, title: "Brand 5" },
    { id: 6, title: "Brand 6" },
    { id: 7, title: "Brand 7" },
  ];

  return (
    <div className="section-title">
      <div className="wrapper">
        {titles.map((title) => (
          <div key={title.id} className="box">
            {title.title}
            <span>//</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function horizontalLoop(items, config = {}) {
  items = gsap.utils.toArray(items);
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    startX = items[0].offsetLeft,
    totalWidth,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = parseFloat(gsap.getProperty(el, "width", "px"));
      return snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
    },
  });
  gsap.set(items, { x: 0 });

  totalWidth =
    items[items.length - 1].offsetLeft +
    items[items.length - 1].offsetWidth *
      gsap.getProperty(items[items.length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);

  items.forEach((item, i) => {
    let curX = parseFloat(gsap.getProperty(item, "x", "px")),
      distanceToStart = item.offsetLeft + curX - startX,
      distanceToLoop =
        distanceToStart +
        parseFloat(gsap.getProperty(item, "width", "px")) *
          gsap.getProperty(item, "scaleX");

    tl.to(
      item,
      {
        xPercent: snap(
          ((curX - distanceToLoop) /
            parseFloat(gsap.getProperty(item, "width", "px"))) *
            100
        ),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) /
              parseFloat(gsap.getProperty(item, "width", "px"))) *
              100
          ),
        },
        {
          xPercent: gsap.getProperty(item, "xPercent"),
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
  });

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}

export default SectionTitle;
