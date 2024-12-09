import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-row justify-center lg:mt-32 mt-20 min-h-[calc(100vh-300px)]">
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
}