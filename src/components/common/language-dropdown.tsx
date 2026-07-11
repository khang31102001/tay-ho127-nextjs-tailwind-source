export function LanguageDropdown() {
  return (
    <div className="absolute right-0 top-[72px] z-20 hidden w-[112px] rounded-md bg-white p-3 text-[15px] leading-7 text-[#b7b7b7] shadow-lg md:block">
      <button className="block w-full text-left hover:text-[#333]">
        Tiếng Việt
      </button>

      <button className="block w-full text-left hover:text-[#333]">
        English
      </button>

      <button className="block w-full text-left font-black text-[#333]">
        日本語
      </button>
    </div>
  );
}