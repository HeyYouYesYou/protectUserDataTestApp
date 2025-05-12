/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from "qs";

import Card from "@/components/ui/card";
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
    <Card>
      <H1>CategoriesPage</H1>

      <section className="grid grid-cols-2 gap-4">
        <CategoryCardItem key={"add new category"} title={"add new category"} />
        {data?.data?.map((item: any) => {
          return (
            <CategoryCardItem
              key={item.documentId}
              title={item.title}
              count={item.to_dos?.length}
            />
          );
        })}
      </section>
    </Card>
  );
};

export default CategoriesPage;
