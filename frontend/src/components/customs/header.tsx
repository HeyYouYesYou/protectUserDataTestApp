import Link from "next/link";
import Image from "next/image";

import PrimaryButton from "../ui/primaryButton";

const Header = () => {
  return (
    <header className="min-w-full h-[48px] flex items-center justify-between p-2 sticky top-0">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={32}
          height={32}
          className="rounded-full"
        />
      </Link>
      <div>
        <span className="pr-4">userName</span>
        <PrimaryButton>login/out</PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
