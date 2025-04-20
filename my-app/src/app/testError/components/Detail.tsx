import React from "react";

export default async function Detail() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Detail</div>;
}
