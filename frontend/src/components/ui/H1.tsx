import { cn } from "@/lib/utils";

interface H1Props {
  children: React.ReactNode;
  className?: string;
}

const H1 = ({ children, className }: Readonly<H1Props>) => {
  return (
    <h1 className={cn(className, "text-3xl font-bold italic")}>{children}</h1>
  );
};

export default H1;
