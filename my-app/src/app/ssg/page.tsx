import React from "react";

// if revalidate = 0 ==> server-rendered 
export const revalidate = 5

export async function generateStaticParams() {
  const res = await fetch(`https://openlibrary.org/works/OL45804W.json`, {
    method: "GET",
  });
  const data = res.json();
  return data;
}

export default function Page() {
  return <div>{Date.now()}</div>;
}
