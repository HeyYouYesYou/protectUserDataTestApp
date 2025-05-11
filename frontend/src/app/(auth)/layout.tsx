import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: layoutProps) => {
  return <article>{children}</article>;
};

export default AuthLayout;
