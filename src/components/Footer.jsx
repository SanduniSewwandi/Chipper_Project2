export default function Footer() {
  return (
    <footer className="w-full" role="contentinfo">
      {/* Decorative top bar */}
      <div className="h-2 bg-[#C8A56A]" />
      {/* Copyright */}
      <div className="bg-[#7D4747] py-3 flex justify-center items-center">
        <p className="text-white text-sm md:text-base font-semibold tracking-wide">
          ©2024 Chipper All Right Reserved
        </p>
      </div>
    </footer>
  );
}