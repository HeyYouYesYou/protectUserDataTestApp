import { cn } from "@/lib/utils";

interface cardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: Readonly<cardProps>) => {
  return (
    <section
      className={cn(
        className,
        "flex flex-col min-h-[calc(100vh-64px)] p-2 m-2 bg-card text-card-foreground border border-border rounded-md"
      )}
    >
      {children}
    </section>
  );
};

export default Card;
