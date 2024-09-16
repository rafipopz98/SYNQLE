import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  const isAuthUser = true;
  return isAuthUser ? (
    <div className="max-w-screen m-4 lg:mt-8 mt-4 border custom-shadow rounded-2xl h-[200vh] overflow-y-auto layoutContainer">
      <div>{children}</div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default Layout;
