export default function HeroTitle({ className = '', style = {} }) {
  return (
    <h1
      className={`font-black text-black tracking-wide animate-text-float select-none ${className}`}
      style={{ fontFamily: "'Fuzzy Bubbles', cursive", ...style }}
    >
      CHIPPER
    </h1>
  );
}