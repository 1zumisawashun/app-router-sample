import { ErrorBoundary, ErrorFetch, Loading } from "@/components";
import Tos from "@/features/tos";
import { Suspense } from "react";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<Loading />}>
        <Tos />
      </Suspense>
    </ErrorBoundary>
  );
}
