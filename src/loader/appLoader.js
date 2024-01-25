import React from "react";

export default function AppLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div
        className="spinner-grow text-dark"
        style={{ width: "3rem", height: "3rem" }}
      ></div>
    </div>
  );
}
