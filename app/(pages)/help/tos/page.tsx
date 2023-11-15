import { ErrorBoundary, FetchError, Loading } from "@/components";
import Tos from "@/features/tos";
import { Suspense } from "react";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<FetchError />}>
      <Suspense fallback={<Loading />}>
        <Tos />
      </Suspense>
    </ErrorBoundary>
  );
}
