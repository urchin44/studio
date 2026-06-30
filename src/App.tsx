import "./App.scss";
import Tabs from "./components/Tabs";
import Tab from "./components/Tab";
import Studio from "./containers/Studio";
import Blog from "./containers/Blog";

function App() {
  return (
    <>
      <div className="horizontalContainer">
        <div className="container orange">
          <img
            className="image-small"
            src="./src/assets/urchinTitleSpike.png"
            alt=""
          />
        </div>
        <Tabs>
          <Tab title="Studio" variant="borderless orange underline">
            <Studio />
          </Tab>
          <Tab title="Blog" variant="borderless orange underline">
            <Blog />
          </Tab>
          <Tab title="Tab 3" variant="borderless orange underline">
            <p></p>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default App;
