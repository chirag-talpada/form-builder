import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FormPanel from "./components/FormPanel/FormPanel";
import SideBar from "./components/SideBar/SideBar";
import DragBox from "./components/DragBox/DragBox";
import PreviewBox from "./components/PreviewBox/PreviewBox";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <FormPanel>
          <div className="form-section">
            <SideBar />
            <DragBox />
            <PreviewBox />
          </div>
        </FormPanel>
      </Provider>
    </div>
  );
}

export default App;
