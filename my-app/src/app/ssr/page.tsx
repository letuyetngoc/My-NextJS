import React from "react";

export const dynamic = "force-dynamic"
// export const revalidate = 0

async function fetchBooks() {
  const res = await fetch(
    `https://openlibrary.org/works/OL45804W.json`,
    {
      method: "GET", 
    //   headers: {
    //     "x-rapidapi-host": "freebooks-api2.p.rapidapi.com",
    //     "x-rapidapi-key": "c8a24f1dfcmshc856446c56a2cafp1ea1abjsn6cd8ede99641", 
    //   },
    }
  );
  const data = res.json();

  return data;
}

export default async function Page() {
  const books = await fetchBooks();
  return <div>{books.description}{Date.now()}</div>;
}
