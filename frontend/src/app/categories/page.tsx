/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from "qs";
import Link from "next/link";
import { CircleFadingPlus } from "lucide-react";

import CustomCard from "@/components/ui/customCard";
import H1 from "@/components/ui/H1";
import { mutateData } from "../data/services/mutate-data";
import CategoryCardItem from "@/components/ui/category-item";

const CategoriesPage = async ({}) => {
  const query = qs.stringify({
    populate: "*",
  });

  const data = await mutateData({
    method: "GET",
    path: `/api/task-lists?${query}`,
  });
  console.log(data);

  return (
    <CustomCard>
      <H1 className="my-8 text-center">Categories</H1>

      <section className="grid grid-cols-2 gap-4">
        <Link
          href={`/categories/new`}
          className="bg-secondary text-primary h-24 flex flex-col items-center justify-center p-2 rounded-[4px]"
        >
          <CircleFadingPlus width={48} height={48} />
        </Link>
        {data?.data?.map((item: any) => {
          return (
            <Link href={`/categories/${item.documentId}`} key={item.documentId}>
              <CategoryCardItem
                title={item.title}
                count={item.to_dos?.length}
              />
            </Link>
          );
        })}
      </section>
    </CustomCard>
  );
};

export default CategoriesPage;
