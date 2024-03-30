import React, { ReactNode } from "react";

type Props = {
  fallback: ReactNode;
  children: ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

// 초기 상태 값
const initialState = { hasError: false, error: null };

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const isErrExist = hasError && error !== null;

    if (isErrExist) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
