import CustomCard from "@/components/ui/customCard";

interface layoutProps {
  children: React.ReactNode;
}

const ListLayout = ({ children }: Readonly<layoutProps>) => {
  return <CustomCard>{children}</CustomCard>;
};

export default ListLayout;
