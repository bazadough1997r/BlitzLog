import HeaderContainer from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img
        src={process.env.PUBLIC_URL + "/assets/darkLogo.png"}
        alt="BlitzLog Header Logo"
      />
    </HeaderContainer>
  );
};

export default Header;
