"use client";

import { useModal } from "../hooks/useModal";

export default function Home() {
  const modal = useModal();

  const handleOpenModal = async () => {
    const res = await modal.push(String(Math.random()), Test, {
      title: String(Math.random()),
    });

    alert(res);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100vh",
      }}
    >
      <button onClick={handleOpenModal}>오픈</button>
    </div>
  );
}

function Test({ resolve, reject, title }) {
  // 모달
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>{title}</h1>
      <button onClick={() => resolve("resolve")}>resolve</button>
      <button onClick={() => reject("reject")}>reject</button>
    </div>
  );
}
