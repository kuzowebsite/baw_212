import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, y: -20, delay: 2 });
  }, []);

  return (
    <section className="w-full h-screen relative bg-black overflow-hidden">
      <video
  className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
  style={{ bottom: '-1%' }}
  autoPlay
  muted
  playsInline
  loop
  key={videoSrc}
>
  <source src={videoSrc} type="video/mp4" />
</video>
      <div className="absolute bottom-10 w-full flex flex-col items-center text-center text-white z-10">
  <a href="#highlights" id="cta" className="btn opacity-0">Baw 212</a>
</div>
    </section>
  );
};

export default Hero;