import Link from "next/link";
import Image from "next/image";
import { getUserMeLoader } from "@/app/data/services/getUserMeLoader";

import { logoutUserAction } from "@/app/data/actions/auth-actions";
import { Button } from "../ui/button";

const Header = async () => {
  const user = await getUserMeLoader();

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
        <span className="pr-4">
          {user?.isAuthorized && user?.data?.username}
        </span>
        <>
          {user?.isAuthorized ? (
            <Button onClick={logoutUserAction}>Log out</Button>
          ) : (
            <Link href="/signin">
              <Button>Sign in</Button>
            </Link>
          )}
        </>
      </div>
    </header>
  );
};

export default Header;
