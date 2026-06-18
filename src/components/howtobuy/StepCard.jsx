export default function StepCard({ title, description }) {
  return (
    <div
      className="
        bg-white
        border-[2px]
        border-black
        rounded-2xl
        p-5 md:p-6
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        flex flex-col
        gap-3
        flex-1
        min-w-0
      "
    >
      <h3
        className="
          text-base md:text-lg
          font-black text-black text-center leading-snug
          break-words
        "
        style={{ fontFamily: "'Fuzzy Bubbles', cursive" }}
      >
        {title}
      </h3>

      <p
        className="
          text-xs md:text-sm
          text-black text-center leading-relaxed
          break-words
        "
        style={{ fontFamily: "'Fuzzy Bubbles', cursive" }}
      >
        {description}
      </p>
    </div>
  );
}