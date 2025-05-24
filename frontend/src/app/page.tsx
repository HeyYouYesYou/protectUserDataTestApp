import Link from "next/link";

import CustomCard from "@/components/ui/customCard";
import H1 from "@/components/ui/H1";
import { Button } from "@/components/ui/button";

import { getUserMeLoader } from "./data/services/getUserMeLoader";

export default async function Home() {
  const user = await getUserMeLoader();

  return (
    <main className="flex flex-col items-center  justify-center">
      <CustomCard className="items-center">
        <H1>Home title</H1>

        <h2 className="text-2xl">home page short description</h2>

        {user.isAuthorized ? (
          <Link href={"/categories"}>
            <Button>Go to the task`s categories</Button>
          </Link>
        ) : (
          <Link href="/signin">
            <Button>Login or register</Button>
          </Link>
        )}

        <p>image</p>

        <br />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores autem voluptatum corrupti consectetur ducimus neque
            aspernatur omnis quia commodi!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores autem voluptatum corrupti consectetur ducimus neque
            aspernatur omnis quia commodi!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            asperiores autem voluptatum corrupti consectetur ducimus neque
            aspernatur omnis quia commodi!
          </p>
        </div>
      </CustomCard>
    </main>
  );
}
