export default function PhaseCard({ phase, className = '' }) {
  return (
    <div
      className={`
        bg-white border-4 border-black rounded-2xl
        p-5 sm:p-6
        shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
        text-center z-30
        animate-fade-scale-in
        ${className}
      `}
    >
      <h3
        className="text-lg sm:text-xl font-black text-black mb-2"
        style={{ fontFamily: "'Fuzzy Bubbles', cursive" }}
      >
        {phase.title}
      </h3>
      <p
        className="text-xs sm:text-sm font-bold text-black leading-relaxed"
        style={{ fontFamily: "'Fuzzy Bubbles', cursive" }}
      >
        {phase.description}
      </p>
    </div>
  );
}