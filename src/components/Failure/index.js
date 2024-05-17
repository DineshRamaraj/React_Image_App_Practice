import "./index.css";

const Failure = (props) => {
  const { onRetry } = props;

  const onRetryButton = () => {
    onRetry();
  }

  return (
    <div className="failure-container" data-testid="failure">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" className="failure-retry-button" onClick={onRetryButton}>
        Retry
      </button>
    </div>
  );
};

export default Failure;
