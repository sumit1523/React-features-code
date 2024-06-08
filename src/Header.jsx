import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        top: "0px",
        justifyContent: "center",
      }}
    >
      <span style={{ padding: "10px" }}>
        <Link to={"/login"}> Login </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/login1"}> Login1 </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/loadMoreUser"}> LoadMoreUser </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/todo"}> Todo </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/slider"}> ImageSlider </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/model"}> Model </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/countDownTimer"}> CountDownTimer </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/quiz"}> Quiz </Link>
      </span>
      <span style={{ padding: "10px" }}>
        <Link to={"/digitalClock"}> DigitalClock </Link>
      </span>
    </div>
  );
};
export default Header;
