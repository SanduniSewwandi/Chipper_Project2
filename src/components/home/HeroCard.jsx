export default function HeroCard({ className = '' }) {
  return (
    <div className={`bg-white border-2 border-black rounded-2xl neo-shadow ${className}`}>
      <p
        className="text-xs md:text-sm lg:text-base leading-relaxed text-black text-center"
        style={{ fontFamily: "'Fuzzy Bubbles', cursive", fontWeight: 700 }}
      >
        Welcome to Chipper world! A place full of fun, smiles, and endless
        adventure. Let's crack open some joy together! Join Chipper as he bounces
        through life, spreading positivity wherever he goes. Whether you're a
        creator, a collector, or just someone looking for a new adventure, Chipper
        is all about connecting like-minded individuals through unique experiences.
        Get ready for a delightful journey with your new favourite character!
      </p>
    </div>
  );
}