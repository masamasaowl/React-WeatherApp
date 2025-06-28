// ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Updates the state when an error is thrown
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong. Please try again.</h2>;
    }

    return this.props.children; // Show child components as normal
  }
}

export default ErrorBoundary;
