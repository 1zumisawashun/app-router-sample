import { ErrorBoundary } from "@/components/elements/ErrorBoundary";
import { ErrorFetch } from "@/components/elements/ErrorFetch";
import { LoadingDot } from "@/components/elements/LoadingDot";

import Tos from "@/features/tos";
import { Suspense } from "react";

export default async function Page() {
  return (
    <ErrorBoundary fallback={<ErrorFetch />}>
      <Suspense fallback={<LoadingDot />}>
        <Tos />
      </Suspense>
    </ErrorBoundary>
  );
}
