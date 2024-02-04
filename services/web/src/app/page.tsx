"use client";

import { ScreenLayout } from "@/components";
import { useAppRouter } from "@/hooks";

export default function Home() {
  const { pushNav } = useAppRouter();

  return (
    <ScreenLayout title="메인">
      <div>메인</div>
      <div onClick={() => pushNav("profile")}>프로필로</div>
    </ScreenLayout>
  );
}
