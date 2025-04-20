import React, { Suspense } from "react";
import Detail from "./components/Detail";
import List from "./components/List";

export default async function Page() {
  return (
    <div>
      <List />
      <Suspense fallback={<div>Loading34x...</div>}>
        <Detail />
      </Suspense>
    </div>
  );
}
