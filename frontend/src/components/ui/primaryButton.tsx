import { cn } from "@/lib/utils";

interface primaryButtonProps {
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({
  children,
  className,
}: Readonly<primaryButtonProps>) => {
  return (
    <button
      className={cn(
        className,
        "cursor-pointer bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-all duration-300"
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
