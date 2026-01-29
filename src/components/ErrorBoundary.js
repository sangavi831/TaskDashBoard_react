
export default function ErrorBoundary({ children }) {
  try {
    return children;
  } catch (error) {
    return (
      <div className="error-boundary">
        <h2>⚠️ Something went wrong</h2>
        <p>An unexpected error occurred. Please try refreshing the page.</p>
      </div>
    );
  }
}

