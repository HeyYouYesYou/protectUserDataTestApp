import Link from "next/link";

const Header = () => {
  return (
    <header className="min-w-full h-[48px] flex items-center justify-between p-2 sticky top-0">
      <Link href={"/"}>logo...</Link>
      <div>
        <span className="pr-4">userName</span>
        <span>login/out</span>
      </div>
    </header>
  );
};

export default Header;
