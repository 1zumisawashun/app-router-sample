import { ErrorBoundary, FetchError, Loading } from "@/app/components";
import Faq from "@/app/features/faq";
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
