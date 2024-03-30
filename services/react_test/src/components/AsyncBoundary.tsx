import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";

type AsyncBoundaryProps = {
  children: React.ReactNode;
  errorFallback?: React.ReactNode;
  loadingFallback?: React.ReactNode;
};

const AsyncBoundary = (props: AsyncBoundaryProps) => {
  const {
    children,
    errorFallback = <div>error!!</div>,
    loadingFallback = <div>loading...</div>,
  } = props;

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
