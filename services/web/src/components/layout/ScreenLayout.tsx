import React from "react";
import { Header } from ".";

interface ScreenLayoutProps {
  title: string;
  router?: string;
  isHeader?: boolean;
  children: React.ReactNode;
}

export const ScreenLayout = ({
  title,
  router = "back",
  isHeader = true,
  children,
}: ScreenLayoutProps) => {
  return (
    <>
      {isHeader && <Header title={title} router={router} />}
      <main className="bg-white h-screen w-full mt-16">{children}</main>
    </>
  );
};
