import infoBoxIcon from '../../assets/image (62) (1).png';

function CommunityText() {
  return (
    <p
      className="text-black text-xs sm:text-sm text-center leading-relaxed mb-6"
      style={{ fontFamily: "'Bubblegum Sans', cursive" }}
    >
      Be part of something exciting and fun! Connect with like-minded individuals,
      stay updated on the latest developments, and participate in exclusive events.
      Whether you're a crypto enthusiast, a creator, or just someone looking for a
      positive space, the Chipper community is where the action is.
    </p>
  );
}

function JoinButton() {
  return (
    <button
      className="bg-[#ffdf1b] hover:bg-[#ffe74c] text-black font-black text-sm px-6 py-2.5 rounded-xl border-4 border-black neo-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
      style={{ fontFamily: "'Bubblegum Sans', cursive" }}
    >
      Join Community
    </button>
  );
}

export default function CommunityBox({ mobile = false }) {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className={`absolute z-20 pointer-events-none ${
        mobile ? '-top-116 right-20' : 'top-0 right-5 -translate-y-[130%] pb-2'
      }`}>
        <img
          src={infoBoxIcon}
          alt="Community header asset"
          className={mobile ? 'w-28 sm:w-36 h-auto object-contain' : 'w-30 lg:w-50 h-auto object-contain'}
          draggable="false"
        />
      </div>
      <div className={`bg-white border-4 border-black rounded-2xl neo-shadow flex flex-col items-center ${
        mobile ? 'w-[80%] p-5 mt-16' : 'w-[460px] p-8 -mt-20'
      }`}>
        <CommunityText />
        <JoinButton />
      </div>
    </div>
  );
}