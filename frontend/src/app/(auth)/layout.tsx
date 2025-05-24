import CustomCard from "@/components/ui/customCard";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: layoutProps) => {
  return (
    <CustomCard className="flex justify-center items-center">
      {children}
    </CustomCard>
  );
};

export default AuthLayout;
