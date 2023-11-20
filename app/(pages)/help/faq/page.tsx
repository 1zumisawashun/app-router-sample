import { ErrorBoundary, ErrorFetch, Loading } from "@/components";
import Faq from "@/features/faq";
import { Suspense } from "react";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<Loading />}>
        <Faq />
      </Suspense>
    </ErrorBoundary>
  );
}
