import { ErrorBoundary, FetchError, Loading } from "@/app/components";
import { Suspense } from "react";
import FaqIndex from "./FaqIndex";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<FetchError />}>
      <Suspense fallback={<Loading />}>
        <FaqIndex />
      </Suspense>
    </ErrorBoundary>
  );
}
