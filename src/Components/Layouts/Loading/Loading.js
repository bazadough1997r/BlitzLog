import "./Loading.css";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img
        className="loadingLogo"
        src={process.env.PUBLIC_URL + "/assets/lightLogo.png"}
        alt="Loading user's table loading"
      />
      <div className="center"></div>
    </div>
  );
};

export default Loading;
