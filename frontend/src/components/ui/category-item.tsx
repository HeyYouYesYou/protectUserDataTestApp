interface pageProps {
  title: string;
  count?: number;
}

const CategoryCardItem = ({ title, count }: Readonly<pageProps>) => {
  return (
    <article className="bg-secondary h-24 flex flex-col items-start justify-center p-2 rounded-[4px]">
      <h3>{title}</h3>
      {count && (
        <p>
          {count} {count > 1 ? "tasks" : "task"}
        </p>
      )}
    </article>
  );
};

export default CategoryCardItem;
