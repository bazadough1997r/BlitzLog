import "./Header.css";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <img
        src={process.env.PUBLIC_URL + "/assets/darkLogo.png"}
        alt="BlitzLog Header Logo"
      />
    </div>
  );
};

export default Header;
