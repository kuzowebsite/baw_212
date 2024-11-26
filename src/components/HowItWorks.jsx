import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"/>
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">Зөвхөн BAW 212в </p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                  2.0+Турбо хөдөлгүүр
                    <span className="text-white"><br />
                    <br />Урд хойноо чулактай, мост
                    </span>
                  </p><br />

                  <p className="hiw-text g_fadeIn">
                  8 шатлалт автомат хурдны хайрцаг {' '}<br />
                    <span className="text-white">
                    <br />Part-time 4WD хагас цагийн<br />
                    </span><br />
                    Гурван цэгийн дифференциал, 4L
                  </p>
                </div>

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
              <p className="hiw-bigtext">Бартаат замын горимууд</p>
                <p className="hiw-text">(цас, шавар, элс, хад чулуу, ус гатлах)</p>
                <p className="hiw-bigtext">Дээд хүч(кВт)</p>
                <p className="hiw-text">185кВт</p>
                <p className="hiw-bigtext">Ус гатлах гүн</p>
                <p className="hiw-text">850мм</p>
                <p className="hiw-bigtext">Газраас тэнхлэг хүртэл зай</p>
                <p className="hiw-text">235мм</p>
              </div>
              </div>
    </section>
  )
}

export default HowItWorks