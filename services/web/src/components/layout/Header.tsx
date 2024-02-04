"use client";

import { useAppRouter } from "@/hooks/useAppRouter";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  title: string;
  router: string;
  isBack?: boolean;
}

export const Header = ({ title, router, isBack = true }: HeaderProps) => {
  const { pushNav, backNav } = useAppRouter();

  return (
    <div className="sticky flex top-0 h-16 border-b-[1px] bg-white border-b-gray-300 w-full items-center">
      <div onClick={() => (isBack ? backNav() : pushNav(router))}>
        <IoIosArrowBack className="w-6 h-6" />
      </div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {title}
      </span>
    </div>
  );
};
