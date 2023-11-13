import { ErrorBoundary, FetchError, Loading } from "@/app/components";
import Tos from "@/app/features/tos";
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
