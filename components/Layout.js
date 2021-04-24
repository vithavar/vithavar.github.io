import About from "./About/About";
import NavBar from "./Navbar/NavBar";
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  <div className="Layout" style={layoutStyle}>
    <NavBar />
    <About />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default Layout;