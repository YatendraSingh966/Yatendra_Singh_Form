import { Space } from "antd";
import "./App.css";
import AppHeader from "./Components/AppHeader";
import SlideMenu from "./Components/SideMenu";
import PageContent from "./Components/PageContent";
import AppFooter from "./Components/AppFooter";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="SideMenuAndPageContent">
        <SlideMenu />
        <PageContent />
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
