import { ErrorBoundary, FetchError, Loading } from "@/app/components";
import { Suspense } from "react";
import TosIndex from "./TosIndex";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<FetchError />}>
      <Suspense fallback={<Loading />}>
        <TosIndex />
      </Suspense>
    </ErrorBoundary>
  );
}
