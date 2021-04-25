import NavBar from "./Navbar/NavBar";
// CSS issue with font awesome
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

const GalleryLayout = props => (
  <div className="Layout" style={layoutStyle}>
    <NavBar />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
  </div>
);

export default GalleryLayout;