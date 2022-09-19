import "./LoadingButton.css";

const LoadingButton = ({
  loading,
  loadingLabel,
  staticLabel,
  type,
  className,
  onClick,
}) => {
  return (
    <div>
      <button
        className={`LoadingButton ${className}`}
        type={type}
        disabled={loading}
        onClick={onClick}
      >
        {loading && (
          <i className="fa fa-refresh fa-spin loadBtn" />
        )}
        {loading && <span>{loadingLabel}</span>}
        {!loading && <span>{staticLabel}</span>}
      </button>
    </div>
  );
};

export default LoadingButton;
