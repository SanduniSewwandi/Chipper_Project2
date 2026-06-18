import chipperWave     from '../assets/tokenomics-image.png';
import tokenomicsBg   from '../assets/tokenomics-bg.png';
import screenShotImage from '../assets/Frame 1261154738 (1).png';
import contractImage   from '../assets/image (69) 1.png';

const STATS = [
  { label: 'Token Supply',    value: '2m'  },
  { label: 'Buy/Sell tax',    value: '0%'  },
  { label: 'Burnt Liquidity', value: null  },
];

export default function AboutUs() {
  return (
    <>
      {/* MOBILE ONLY */}
      <div className="md:hidden relative w-full overflow-hidden px-14 sm:px-16 pt-10 pb-8">

        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${tokenomicsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="bg-white border-[3px] border-black rounded-[1.5rem] p-8 w-full z-20 relative px-12 mt-16">
          <h2
            className="text-xl font-black text-center mb-6 text-black"
            style={{ fontFamily: "'Baloo 2', cursive" }}
          >
            Chippernomics
          </h2>

          <div className="flex flex-col gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-[#FFE552] border-[3px] border-black rounded-xl py-4 px-4 flex flex-col items-center justify-center text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              >
                <span className="text-sm font-extrabold">
                  {s.label}
                </span>

                {s.value && (
                  <span className="text-lg font-black mt-1">
                    {s.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full -mt-12 z-20 relative -translate-x-30 sm:-translate-x-8">
          <img
            src={contractImage}
            className="w-full h-auto object-contain"
            alt=""
          />
        </div>

        <div className="w-full flex justify-end z-50 -mt-10 pointer-events-none">
          <img
            src={chipperWave}
            className="w-[75%] max-w-xs h-auto object-contain animate-float-up-right"
            alt=""
          />
        </div>
      </div>

      {/* DESKTOP + TABLET (IMPORTANT FIX HERE) */}
      <section
        id="aboutus"
        className="
          relative w-full min-h-[600px]
          hidden md:flex items-center justify-end
          px-4 sm:px-8 md:px-12 lg:px-24
        "
      >
        {/* Background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${tokenomicsBg})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Character (UNCHANGED POSITION — only scaling improved for tablet) */}
        <div className="
          absolute
          left-[-10px] sm:left-10 md:left-25 lg:left-85
          bottom-50
          z-50
          w-45 sm:w-64 md:w-72 lg:w-90
          pointer-events-none
        ">
          <img src={chipperWave} className="w-full h-auto object-contain" />
        </div>

        {/* Right wrapper (UNCHANGED POSITION + TABLET SAFE WIDTH) */}
        <div className="
          relative z-30
          w-full max-w-xl
          sm:max-w-xl md:max-w-lg lg:max-w-xl
          mr-auto ml-20 md:ml-32 lg:ml-130
          -mt-1 md:-mt-0
        ">

          {/* White box (UNCHANGED POSITION) */}
          <div className="
            absolute -top-80 left-0 w-full
            bg-white border-[3px] border-black rounded-[2rem]
            pt-5 pr-15 pb-20 pl-15
            md:pt-6 md:pr-20 md:pb-32 md:pl-20
          ">
            <img src={screenShotImage} className="w-full h-auto object-contain" />
          </div>

          {/* Contract image */}
          <div className="absolute -top-[130px] left-0 w-full">
            <img src={contractImage} className="w-full h-auto object-contain" />
          </div>

        </div>
      </section>
    </>
  );
}