import Card from "@/components/ui/card";
import H1 from "@/components/ui/H1";

const CategoriesPage = ({}) => {
  return (
    <Card>
      <H1>CategoriesPage</H1>

      <section className="grid grid-cols-2 gap-4">
        <div className="bg-secondary h-24 flex flex-col items-start justify-center p-2 ">
          add new category
        </div>

        <div className="bg-secondary h-24 flex flex-col items-start justify-center p-2">
          <p>category name</p>
          <p>task count</p>
        </div>

        <div className="bg-secondary h-24 flex flex-col items-start justify-center p-2">
          <p>category name</p>
          <p>task count</p>
        </div>

        <div className="bg-secondary h-24 flex flex-col items-start justify-center p-2">
          <p>category name</p>
          <p>task count</p>
        </div>
      </section>
    </Card>
  );
};

export default CategoriesPage;
