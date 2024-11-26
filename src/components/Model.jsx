import { useEffect } from "react";
import gsap from "gsap";

const Model = () => {
  useEffect(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          3D орчиноос харах.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <iframe
              title="Baw 212"
              className="w-full h-full rounded-3xl"
              src="https://sketchfab.com/models/e5e2a1d2238048a1a494b3df983c16bb/embed?autostart=1&amp;internal=1&amp;tracking=0&amp;ui_ar=0&amp;ui_infos=0&amp;ui_snapshots=1&amp;ui_stop=0&amp;ui_theatre=1&amp;ui_watermark=0"
              id="api-frame"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              execution-while-out-of-viewport="true"
              execution-while-not-rendered="true"
              web-share="true"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
