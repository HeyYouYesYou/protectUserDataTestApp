import Link from "next/link";

import Card from "@/components/ui/customCard";
import H1 from "@/components/ui/H1";
import PrimaryButton from "@/components/ui/primaryButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center  justify-center">
      <Card className="items-center">
        <H1>Home title</H1>

        <h2 className="text-2xl">home page short description</h2>

        <Link href={"/categories"}>
          <PrimaryButton>CTA - go to task lists or login form</PrimaryButton>
        </Link>

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
      </Card>
    </main>
  );
}
