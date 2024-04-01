import "./App.css";
import ironhackLogo from "images/ironhack-logo.png";
import menuTop from "images/menu-top.png";
import declarativeLogo from "images/icon1.png";
import componentsLogo from "images/icon2.png";
import singlewayLogo from "images/icon3.png";
import jsxLogo from "images/icon4.png";

function App() {
  return (
    <>
      <div className="App">
        <img src={ironhackLogo} alt="Ironhack Logo" />
        <img src={menuTop} alt="Menu Button" />
        <img src={declarativeLogo} alt="Declarative Logo" />
        <img src={componentsLogo} alt="Components Logo" />
        <img src={singlewayLogo} alt="Single Way Logo" />
        <img src={jsxLogo} alt="JSX Logo" />
      </div>
    </>
  );
}
export default App;
