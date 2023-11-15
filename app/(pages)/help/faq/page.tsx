import { ErrorBoundary, FetchError, Loading } from "@/components";
import Faq from "@/features/faq";
import { Suspense } from "react";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<FetchError />}>
      <Suspense fallback={<Loading />}>
        <Faq />
      </Suspense>
    </ErrorBoundary>
  );
}
