import Splitter from "./components/Splitter";
import { SiteLink } from "./components/SiteLink/SiteLinkElement";
import { ImageElement } from "./components/Image/ImageElement";
import Logo from "./images/logo.svg";

function App() {
  return (
    <>
      <SiteLink href="/">
        <ImageElement src={Logo} />
      </SiteLink>
      <Splitter />
    </>
  );
}

export default App;
